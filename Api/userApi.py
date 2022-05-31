import uuid
from flask import Blueprint, request, jsonify
from firebase_admin import firestore

db = firestore.client()
user_Ref = db.collection('user')

userApi = Blueprint('userApi', __name__)

@userApi.route('/add', methods=['POST'])
def create():
    try:
        id = uuid.uuid4()    
        user_Ref.document(id.hex).set(request.json)
        return jsonify({'status': True}), 200
    except Exception as e:
        return f"An Error Occured: {e}"