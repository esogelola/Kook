from flask import request
from flask_restplus import Resource

from ..util.dto import CookbookDto
from ..service.cookbook_service import save_new_cookbook, get_all_cookbooks


api = CookbookDto.api
_cookbook = CookbookDto.cookbook

@api.route('/')
class CookBookList(Resource):
    @api.doc('list of cookbooks')
    @api.marshal_list_with(_cookbook, envelope='data')
    def get(self):
        """List all registered users"""
        return get_all_cookbooks()

    @api.response(201, 'Cookbook successfully created.')
    @api.doc('create a new cookbook')
    @api.expect(_cookbook, validate=True)
    def post(self):
        """Creates a new User """
        data = request.json
        return save_new_cookbook(data=data)