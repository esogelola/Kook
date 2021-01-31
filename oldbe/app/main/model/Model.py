from bson import ObjectId
from app.main.db.db import mongo


class Model(dict):
    """
    A Simple model that wraps a mongodb document.
    Inspired by https://gist.github.com/fatiherikli/4350345
    """

    # Override get, delete and set attributes of class
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    errors = []
    collection = None
    collection_name = ""

    def __init__(self, *args, **kwargs):
        self.collection = mongo.db[self.collection_name]
        print(self.collection)
        dict.__init__(self, *args, **kwargs)

    def __setitem__(self, key, value):
        if key in self:
            del self[key]
        super().__setitem__(key, value)
        print(self)

    def save(self):
        """When the model is saved, check if the object has an id, if so update existing document, if not create one."""
        if not self.errors:
            if not self._id:
                self.collection.insert(self)
            else:
                self.collection.update({"_id": ObjectId(self._id)}, self)
        else:
            return self.errors

    def reload(self):
        """When called, if the object has an id we will get the collection by id"""

        if self._id:
            self.update(self.collection
                        .find_one({"_id": ObjectId(self._id)}))

    def remove(self):
        """When called, remove the object by id and clear the objects collection."""
        if self._id:
            self.collection.remove({"_id": ObjectId(self._id)})
            self.clear()

    def load(self, id):
        self._id = id
        self.reload()
