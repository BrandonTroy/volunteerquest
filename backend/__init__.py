from flask import Flask
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from datetime import timedelta


def create_app():
    app = Flask(__name__)

    # Writing URI
    file = open("secret.txt", "r")
    password = file.readline()
    uri = f'mongodb+srv://eftucker:{password}@cluster0.mhhgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    with app.app_context():
        app.config["MONGO_URI"] = uri
        app.config["JWT_SECRET_KEY"] = '3d0a4d08c094628a051fb6ee8a825f4f'
        app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=1)
        app.config["JWT_TOKEN_LOCATION"] = ["cookies"]
        app.config["JWT_ACCESS_COOKIE_NAME"] = "token"
        app.config["JWT_COOKIE_CSRF_PROTECT"] = False

    return app


def create_jwt(app):
    return JWTManager(app)


def create_db(app):
    with app.app_context():
        return PyMongo(app).cx["VolunteerQuest"]