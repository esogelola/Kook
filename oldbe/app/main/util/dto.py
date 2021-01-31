from flask_restplus import Namespace, fields


class CookbookDto:
    api = Namespace('cookbook', description='cookbook related operations')
    cookbook = api.model('cookbook', {
        'title': fields.String(required=True, description='user email address'),
        'slug': fields.String(required=True, description='user username'),
    })
