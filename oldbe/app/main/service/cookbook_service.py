import uuid
import datetime

from app.main.db.db import mongo
from app.main.model.Cookbook import Cookbook


def save_new_cookbook(data):
    cookbook = Cookbook({"_id": data['_id']}).reload()
    if not cookbook:
        data['created'] = datetime.datetime.utcnow()
        new_cookbook = cookbook(data)
        new_cookbook.save()
        response_object = {
            'status': 'success',
            'message': 'Cookbook has been created.'
        }
        return response_object, 201
    else:
        response_object = {
            'status': 'fail',
            'message': 'Cookbook already exists.',
        }
        return response_object, 409


def get_all_cookbooks():
    return Cookbook({"_id": "600f6b36b5424643ffaaf230"})
