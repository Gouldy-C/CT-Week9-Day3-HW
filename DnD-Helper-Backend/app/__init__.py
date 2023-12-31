from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

from flask_cors import CORS
from flask_jwt_extended import JWTManager

from ConfigMod import Config

app = Flask(__name__)

app.config.from_object(Config)


db = SQLAlchemy(app)
migrate = Migrate(app, db)


CORS(app)
jwt = JWTManager(app)


from app.blueprints.api import bp as api
app.register_blueprint(api)


from app import  models
