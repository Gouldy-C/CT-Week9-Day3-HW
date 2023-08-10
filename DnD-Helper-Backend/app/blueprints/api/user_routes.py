from . import bp as api
from flask import request, jsonify
from flask_jwt_extended import get_jwt_identity, jwt_required
from app.models import  User, Character

# I need to go through all of this and set it up for this app

@api.post('/create-character')
@jwt_required()
def create_character():
    character = request.json.get('character')
    username = get_jwt_identity()
    user = User.query.filter_by(username=username).first()
    try:
        c = create_character(character) # Character() need to write a character paresing function that returns a Character object
        c.commit()
    except:
        return jsonify({'error': 'invalid character info'}), 401
    return jsonify({'message': 'Character successfully created',
                    'loged in as' : user.username}), 200



@api.get('/user/<username>')
@jwt_required()
def get_user_page(username):
    user = User.query.filter_by(username=username).first()
    if user:
        characters = user.characters
        return jsonify({
            'message': 'Success',
            'characters' : [{character.id: character} for character in characters]
        }),200
    return jsonify({'error' : 'Not a valid username'}),401


@api.delete('/delete-character/<character_id>')
@jwt_required()
def delete_character(character_id):
    character = Character.query.get(id=character_id)
    if not character:
        return jsonify(message = 'Invalid Character Id'),401
    if character.maker.username != get_jwt_identity():
        return jsonify(message = 'You are not allowed to delete this character'),401
    character.delete()
    return jsonify(message = 'Character deleted'),200



@api.post('/edit-character/')
@jwt_required()
def edit_character():
    character = request.json.get('character')
    character = Character.query.get(character.id)
    if not character:
        return jsonify(message = 'Invalid Character Id'),401
    if character.author.username != get_jwt_identity():
        return jsonify(message = 'You are not allowed to edit this character'),401
    update_character(character)
    character.update()
    return jsonify(message = 'Character deleted'),200
