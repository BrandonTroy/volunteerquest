from flask import Flask
from flask_pymongo import PyMongo


def create_app():
    app = Flask(__name__)

    # Writing URI
    file = open("secret.txt", "r")
    password = file.readline()
    uri = f'mongodb+srv://eftucker:{password}@cluster0.mhhgb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

    with app.app_context():
        app.config["MONGO_URI"] = uri

    return app