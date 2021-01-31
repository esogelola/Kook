
from .Model import Model
from .. import mongo


class User(Model):
    collection_name = "recipe"
