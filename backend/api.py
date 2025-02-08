from flask import Flask, jsonify, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from flask_pymongo import PyMongo
from flask import current_app, g, Flask

def create_db(app):
    with app.app_context():
        return PyMongo(app).cx["VolunteerQuest"]

def add_user(db, name, age):
    user_doc = {"name": name, "age": age}
    return db.users.insert_one(user_doc)