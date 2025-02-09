from functools import wraps
from flask import Flask, jsonify, request, redirect, url_for, render_template, flash, make_response
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_pymongo import PyMongo
from flask import current_app, g, Flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required
from flask_cors import CORS
import datetime

from __init__ import create_app, create_jwt, create_db


app = create_app()
CORS(app, origins="*", supports_credentials=True)
db = create_db(app)
jwt = create_jwt(app)


# Tested - Successful
@app.route('/register', methods=["POST"])
def register():
    user = request.get_json()
    username = user["username"]
    password = user["password"]
    email = user["email"]
    interests = db.config.find_one()["default_interests"]
    bio = db.config.find_one()["default_bio"]
    theme = db.config.find_one()["default_theme"]
    # Default Empty Lists
    current_quests = []
    stats = {}
    friends = []
    guild = {}
    stories = []

    if db.users.find_one({'username': username}):
        return jsonify({'msg': "Username already exists!"}), 409
    
    db.users.insert_one({'username': username, 'password': generate_password_hash(password), 'email': email, "interests": interests, "bio": bio, 
                            "current_quests": current_quests, "stats": stats, "friends": friends, "guild": guild, "stories": stories, "theme": theme})
    
    token = create_access_token(identity=username)
    response = make_response("token")
    response.set_cookie("token", token, max_age=3600, samesite='Lax', secure=False)
    return response, 200


# Tested - Successful
@app.route('/login', methods=["POST"])
def login():
    login = request.get_json()
    username = login['username']
    password = login['password']

    user = db.users.find_one({'username': username})
    
    if user and check_password_hash(user["password"], password):
        token = create_access_token(identity=user['username'])
        response = make_response("token")
        response.set_cookie("token", token, max_age=3600, samesite='Lax', secure=False)
        return response, 200
    
    return jsonify({'msg': "The username or password is incorrect"}), 401


# Updates user data including interests, bio, and email, Tested - Successful
@app.route("/user", methods=["GET", "PUT"])
@jwt_required()
def get_user():
    try:
        current_user = get_jwt_identity()
    except:
        return jsonify({'msg': 'Unauthorized'}), 401
    
    user_from_db = db.users.find_one({'username': current_user})
    if not user_from_db:
        return jsonify({'msg': "Profile not found."}), 404

    if request.method == "GET":    
        return jsonify({'msg': "Success", 'payload': user_from_db}), 200
    else:
        data = request.get_json()
        update_fields = {}

        if "interests" in data:
            update_fields["interests"] = data["interests"]
        if "bio" in data:
            update_fields["bio"] = data["bio"]
        if "email" in data:
            update_fields["email"] = data["email"]
        if "theme" in data:
            update_fields["theme"] = data["theme"]

        if update_fields:
            db.users.update_one({
                'username': current_user},
                {'$set': update_fields}
            )

            return jsonify({"msg": "Profile updated successfully."}), 200
        else:
            # I don't think this should throw an error
            return jsonify({"msg": "No fields updated."}), 200
    

@app.route("/config", methods=["GET"])
def config():
    return jsonify({'msg': "Success", 'payload': db.config.find()})


@app.route("/user/complete_quest", methods=["POST"])
@jwt_required()
def user_complete_quest():
    try:
        current_user = get_jwt_identity()
    except:
        return jsonify({'msg': 'Unauthorized'}), 401
    
    # Setting the quest to completed
    data = request.get_json()
    db.users.update_one(
        {"username": current_user, "user.quests.id": data["quest_id"]},
        {"$set": {"user.quests.$.completed": True}}
    )

    # The new story, generated from the generative AI
    story = {"title": "Default Story Title", "theme": "Default Story Theme"}


    # Creating a new story
    db.users.update_one(
        {"username": current_user},
        {"$push": {"user.stories": story}}
    )

    return jsonify({"msg": "Task Successfully Completed"}), 200


# Function to create a new organization or get an organization by id
@app.route("/org", methods=["GET", "POST"])
def org():
    org = request.get_json()
    if request.method == "GET":
        # Getting information about an organization
        id = org["id"]
        return jsonify({'msg': "Success", 'payload': db.orgs.find({'id': id})}), 200
    else:
        # Creating a new organization
        username = org["username"]  # Required
        contact = org["contact"] if "contact" in org.keys() else "null_contact"
        description = org["description"] if "description" in org.keys() else db.config.find_one()["default_bio"]
        quests = org["quests"] if "quests" in org.keys() else {}  # Default Empty Dictionary
        db.orgs.insert_one({"username": username, "contact": contact, "description": description, "quests": quests})
        return jsonify({"msg": "Organization Created Successfully"}), 201
    
"""
# Function to create, join, or get information about a guild
@app.route("/guild", methods=["GET", "POST", "PUT"])
def guild():
    guild = request.get_json()
    if request.method == "GET":
        # Getting a guild by ID
        id = guild["id"]
        return jsonify({"msg": "Success", "payload": db.guilds.find({"id": id})}), 200
    elif request.method == "POST": 
        # Creating a new guild
        user_id = guild["user_id"]  # Required, the id of the user who started the guild
        name = guild["name"]  # Required
        users = [user_id]
        expiration_date = guild["expiration_date"] if "expiration_date" in guild.keys() else datetime.datetime.now()  # Default, ideally + default duration
        target = guild["target"] if "target" in guild.keys() else db.config.find_one()["default_target"]
        current = 0  # Initializing progress to 0
        active = True
        db.guild.insert_one({"name": name, "users": users, "expiration_date": expiration_date, "target": target, "current": current, "active": active})
        return requests.put()
    else:
        # Adding a user to a guild
"""


# Function to add a quest to an organization
@app.route("/org/quests", methods=["POST"])
def org_quests():
    quest = request.get_json()
    guild_id = quest["guild_id"]  # Required
    name = quest["name"] if "name" in quest.keys() else db.config.find_one()["default_name"]
    description = quest["description"] if "description" in quest.keys() else db.config.find_one()["default_bio"]
    time = quest["time"] if "time" in quest.keys() else datetime.now()  # Defaults to the current time
    duration = quest["duration"] if "duration" in quest.keys() else db.config.find_one()["default_quest_duration"]
    members = quest["members"] if "members" in quest.keys() else {}  # Default empty dictionary
    isProphecy = quest["isProphecy"] if "isProphecy" in quest.keys() else False
    db.guilds.find_one({"id": guild_id})["quests"].append({"name": name, "description": description, "time": time, "duration": duration, "members": members, "isProphecy": isProphecy})
    return jsonify({"msg": "Quest Added Successfully"}), 201


# Function to add a quest to a user - like assigning them to the user
@app.route("/user/quests", methods=["POST"])
def user_quests():
    return jsonify({"msg": "Failure Unimplemented"})

    

# Deprecated
@app.route("/create", methods=["POST"])
@jwt_required()
def create_template():
    current_user = get_jwt_identity()
    user_from_db = db.users.find_one({'username': current_user})

    if user_from_db:
        template_details = request.get_json()

        user_template = {'profile': user_from_db["username"], "template": template_details["template"]}

        doc = db.templates.find_one(user_template)

        if not doc:
            db.templates.insert_one(user_template)
            print("User template", user_template)
            return jsonify({'msg': "Template Created Successfully"}), 200
        else:
            return jsonify({'msg': "Template already exists on your profile"}), 404
    else:
        return jsonify({'msg': "Access Token Expired"}), 401
    

# Deprecated
@app.route("/update", methods=["POST"])
@jwt_required()
def update_template():
    """Updating the template with respect to the user
    Returns:
        dict: Return the profile and template created
    """
    # Getting the user from access token
    current_user = get_jwt_identity() # Get the identity of the current user
    user_from_db = db.users.find_one({'username' : current_user})
    
    # Checking if user exists
    if user_from_db:
        # Getting the template details from json
        template_details = request.get_json() # store the json body request
        # Viewing if templated already present in collection
        user_template = {'profile' : user_from_db["username"],  "template": template_details["old_template"]}
        doc = db.templates.find_one(user_template) # check if user exist
        # Updating collection if not exists
        
        if doc:
            doc["template"] = template_details["new_template"]
            db.templates.update_one(user_template, {"$set": {"template":doc["template"]}}, upsert=False)
            return jsonify({'msg': 'Template Updated successfully'}), 200
        # Returning message if template exists
        else: return jsonify({'msg': 'Template not exists on your profile'}), 404
    else:
        return jsonify({'msg': 'Access Token Expired'}), 401
        

# Deprecated
@app.route("/delete", methods=["POST"])
@jwt_required()
def delete_template():
    """Creating the template with respect to the user
    Returns:
        dict: Return the profile and template created
    """
    # Getting the user from access token
    current_user = get_jwt_identity() # Get the identity of the current user
    user_from_db = db.users.find_one({'username' : current_user})
    
    # Checking if user exists
    if user_from_db:
        # Getting the template details from json
        template_details = request.get_json() # store the json body request
        # Viewing if templated already present in collection
        user_template = {'profile' : user_from_db["username"],  "template": template_details["template"]}
        doc = db.templates.find_one(user_template) # check if user exist
        # Creating collection if not exists
        
        if doc:
            db.templates.delete_one(user_template)
            print("user_template ", user_template)
            return jsonify({'msg': 'Template Deleted Sucessfully'}), 404
        # Returning message if template exists
        else: return jsonify({'msg': 'Template not exists on your profile'}), 404
    else:
        return jsonify({'msg': 'Access Token Expired'}), 401
    

if __name__ == '__main__':
    app.run(debug=True)
