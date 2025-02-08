from flask import Flask, jsonify, request, redirect, url_for
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user

app = Flask(__name__)



if __name__ == '__main__':
    app.run(debug=True)