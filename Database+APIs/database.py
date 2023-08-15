from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi
from pprint import pprint

class database:
    def __init__(self):
        uri = "mongodb+srv://user:user@harvest-hero.zdaj74u.mongodb.net/?retryWrites=true&w=majority"

        # Create a new client and connect to the server
        self.client = MongoClient(uri, tlsCAFile=certifi.where())

        # Send a ping to confirm a successful connection
        try:
            self.client.admin.command('ping')
            print("Pinged your deployment. You successfully connected to MongoDB!")
        except Exception as e:
            print(e)

        self.db = self.client['Harvest-Hero']

    
