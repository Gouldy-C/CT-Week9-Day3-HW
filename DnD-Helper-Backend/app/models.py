from app import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(75), nullable=False, unique=True)
    email = db.Column(db.String(100), nullable=False, unique=True)
    password_hash = db.Column(db.String(), nullable=False)
    characters = db.relationship('Character', backref='maker', lazy=True)

    def commit(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    def hash_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def from_dict(self, user_dict):
        for k, v in user_dict.items():
            setattr(self, k, v)

    def get_id(self):
        return str(self.id)

    def to_dict(self):
        return {
            'email': self.email,
            'username': self.username,
        }

# TODO:finish building out this model for Characters
class Character(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(75), nullable=False)
    level = db.Column(db.INT4RANGE(1, 20), nullable=False)
    hp = db.Column(db.Integer(), nullable=False)
    race = db.Column(db.String(), nullable=False)
    charClass = db.Column(db.String(), nullable=False)
    abilityScores = db.Column(db.JSON(), nullable=False)
    skills = db.Column(db.JSON(), nullable=False)
    senses = db.Column(db.JSON(), nullable=False)
    initiative = db.Column(db.Integer() default=0)
    profs_languages = db.Column(db.JSON(), nullable=False)
    backgound = db.Column(db.String(), nullable=False)
    equipment = db.Column(db.JSON())
    equipArmaments = db.Column(db.JSON())
    gold = db.Column(db.JSON())
    insperation = db.Column(db.Boolean(), default=False)
    charDetails = db.Column(db.String())
    conditions = db.Column(db.String())
    defenses = db.Column(db.String())
    

    def commit(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()
