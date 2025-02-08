from flask import Flask, jsonify, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_pymongo import PyMongo
from flask import current_app, g, Flask

# Writing URI
file = open("secret.txt", "r")
password = file.readline()
uri = f'mongodb+srv://eftucker:{password}@cluster0.mhhgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

# Creating db object
app = Flask(__name__)
with app.app_context():
    app.config["MONGO_URI"] = uri
    db = PyMongo(app).cx["VolunteerQuest"]


def add_user(name, age):
    user_doc = {"name": name, "age": age}
    return db.users.insert_one(user_doc)

if __name__ == '__main__':
    app.run(debug=True)