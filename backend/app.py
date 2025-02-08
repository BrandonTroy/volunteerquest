from flask import Flask, jsonify, request, redirect, url_for, render_template, flash
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_pymongo import PyMongo
from flask import current_app, g, Flask
from werkzeug.security import generate_password_hash, check_password_hash

from __init__ import create_app
from api import create_db, add_user

app = create_app()
db = create_db(app)

@app.route('/register', methods=["GET", "POST"])
def register():
    if request.method == 'POST':
        username = request.form["username"]
        password = request.form["password"]

        if db.users.find_one({'username': username}):
            # Replace with something more apt later
            print("User already exists!")
        else:
            db.users.insert_one({'username': username, 'password': generate_password_hash(password)})
            print("User added to database!")
    
    return render_template('register.html')


@app.route('/login', methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form['username']
        password = request.form['password']

        cursor = db.users.find({'username': username})
        
        login = False
        for user in cursor:
            if check_password_hash(user["password"], password):
                print("User Successfully Logged In!")
                login = True
                break
        
        if not login:
            print("Incorrect User Name or Password")
    
    return render_template('login.html')

if __name__ == '__main__':
    app.run(debug=True)

