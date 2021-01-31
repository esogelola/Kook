import os
import unittest

from flask import current_app
from flask_testing import TestCase


from manage import app
from main.config import basedir


class TestDevelopmentConfig(TestCase):
    def create_app(self):
        app.config.from_object('main.config.DevelopmentConfig')
        return app

    def test_app_is_development(self):
        self.assertFalse(app.config['SECRET_KEY'] is 'my_precious')
        self.assertTrue(app.config['DEBUG'] is True)
        self.assertFalse(current_app is None)
        self.assertTrue(app.config['MONGO_DB_NAME']
                        == 'FLASK_BOILERPLATE_MAIN')
        self.assertTrue(
            app.config['MONGO_URI'] == "mongodb+srv://ameroft:<demsog21>@cluster0.dcuv4.mongodb.net/" +
            app.config['MONGO_DB_NAME']+"?retryWrites=true&w=majority"
        )


class TestTestingConfig(TestCase):
    def create_app(self):
        app.config.from_object('main.config.TestingConfig')
        return app

    def test_app_is_testing(self):
        self.assertFalse(app.config['SECRET_KEY'] is 'my_precious')
        self.assertTrue(app.config['DEBUG'])
        self.assertTrue(app.config['MONGO_DB_NAME']
                        == 'FLASK_BOILERPLATE_TEST')
        self.assertTrue(
            app.config['MONGO_URI'] == "mongodb+srv://ameroft:<demsog21>@cluster0.dcuv4.mongodb.net/" +
            app.config['MONGO_DB_NAME']+"?retryWrites=true&w=majority"
        )


class TestProductionConfig(TestCase):
    def create_app(self):
        app.config.from_object('main.config.ProductionConfig')
        return app

    def test_app_is_production(self):
        self.assertTrue(app.config['DEBUG'] is False)


if __name__ == '__main__':
    unittest.main()
