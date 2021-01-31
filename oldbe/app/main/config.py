import os


basedir = os.path.abspath(os.path.dirname(__file__))


class Config:
    SECRET_KEY = os.getenv('SECRET_KEY', 'my_precious_secret_key')
    DEBUG = False


class DevelopmentConfig(Config):

    DEBUG = True
    MONGO_DB_NAME = "FLASK_BOILERPLATE_MAIN"
    MONGO_URI = "mongodb+srv://ameroft:demsog21@cluster0.dcuv4.mongodb.net/" + \
        MONGO_DB_NAME+"?retryWrites=true&w=majority"


class TestingConfig(Config):
    DEBUG = True
    TESTING = True
    MONGO_DB_NAME = "FLASK_BOILERPLATE_TEST"
    MONGO_URI = "mongodb+srv://ameroft:demsog21@cluster0.dcuv4.mongodb.net/" + \
        MONGO_DB_NAME+"?retryWrites=true&w=majority"


class ProductionConfig(Config):
    DEBUG = False


config_by_name = dict(
    dev=DevelopmentConfig,
    test=TestingConfig,
    prod=ProductionConfig
)

key = Config.SECRET_KEY
