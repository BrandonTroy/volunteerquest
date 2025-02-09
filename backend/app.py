from functools import wraps
from flask import Flask, jsonify, request, redirect, url_for, render_template, flash, make_response
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_pymongo import PyMongo
from flask import current_app, g, Flask
from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import JWTManager, create_access_token, get_jwt_identity, jwt_required

from __init__ import create_app, create_jwt, create_db


app = create_app()
db = create_db(app)
jwt = create_jwt(app)


# Requires the JWT Token and redirects to the login page if not present
def jwt_required_redirect():
    def decorator(func):
        @wraps(func)
        @jwt_required(optional=True)  # Optional so the execution enters the wrapper methods
        def wrapper(*args, **kwargs):
            try:
                current_user = get_jwt_identity()
            except:
                # This shouldn't run, but for safety it's here
                return redirect(url_for('login'))
        
            # Redirecting if current user is null
            if not current_user:
                return redirect(url_for("login"))
            
            # Calling the original function if good
            return func(*args, **kwargs)
        return wrapper
    return decorator


@app.route('/register', methods=["POST"])
def register():
    user = request.get_json()
    username = user["username"]
    password = user["password"]
    email = user["email"]

    if db.users.find_one({'username': username}):
        return jsonify({'msg': "Username already exists!"}), 409
    else:
        db.users.insert_one({'username': username, 'password': generate_password_hash(password), 'email': email})
        return jsonify({'msg': "User created successfully!"}), 201


@app.route('/login', methods=["POST"])
def login():
    login = request.get_json()
    username = login['username']
    password = login['password']

    user = db.users.find_one({'username': username})
    
    if user and check_password_hash(user["password"], password):
            token = create_access_token(identity=user['username'])
            response = make_response("token")
            response.set_cookie("token", token, max_age=3600)
            return response, 200
    
    return jsonify({'msg': "The username or password is incorrect"}), 401


@app.route("/user/data", methods=["GET"])
@jwt_required_redirect()
def email():
    try:
        current_user = get_jwt_identity()
    except:
        return redirect(url_for('login'))
    
    user_from_db = db.users.find_one({'username': current_user})
    
    if user_from_db:
        return jsonify({'msg': "Success", 'payload': user_from_db}), 200
    else:
        return jsonify({'msg': "Profile not found."}), 404
    

@app.route("/config/data", methods=["GET"])
def config():
    return jsonify({'msg': "Success", 'payload': db.config.find()})
    

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
        return jsonify({'msg': "Access Token Expired"}), 404
    

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
        return jsonify({'msg': 'Access Token Expired'}), 404
        

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
        return jsonify({'msg': 'Access Token Expired'}), 404
    

if __name__ == '__main__':
    app.run(debug=True)
