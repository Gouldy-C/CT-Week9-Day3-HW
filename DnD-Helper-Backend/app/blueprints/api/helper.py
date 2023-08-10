from app import app
from flask import jsonify
from flask_jwt_extended import get_jwt,create_access_token,get_jwt_identity
from datetime import datetime, timezone, timedelta
from email_validator import validate_email, EmailNotValidError
from python_usernames import is_safe_username
import re


@app.after_request
def refresh_expiring_jwt(response):
    expiration = get_jwt()['exp']
    current  = datetime.now(timezone.utc)
    future_halfhour = datetime.timestamp(current + timedelta(minutes=30))
    if future_halfhour > expiration:
        access_token = create_access_token(identity= get_jwt_identity())
        data = response.get_json()
        data['access_token'] = access_token
        response.data = jsonify(data)
        return response


def valid_email(email):
    try:
        emailinfo= validate_email(email, check_deliverability=True)
        email = emailinfo.normalized
        print(email)
        return True
    except EmailNotValidError as e:
        print(str(e))
        return False



def valid_username(username):
    return is_safe_username(username, max_length=25 )



def valid_password(password):
    pass_pattern = re.compile('^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,25}$')
    if re.search(pass_pattern, password):
        return True
    return False

