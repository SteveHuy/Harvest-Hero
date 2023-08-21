from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi
from pprint import pprint
import datetime

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

        self.crop = self.db.crop

        self.recipe = self.db.recipe

        self.area = self.db.area

    
    def retrieve_area(self, region: str):
        res = []
        cursor = self.area.find()
        season = self.get_season()

        for document in cursor:
            if region in document["area_name"] and season in document['season']:
                res.append(document)
        return res
    

    def retrieve_plant(self, rainfall: int, temperature: int, sun: int, placement: int):
        cursor = self.crop.find()
        res = []
        for document in cursor:
            if document['Rainfall (Scale 1-5)'] == rainfall and document['Temperature (Scale 1-5)'] == temperature and document['Sunlight Requirement (Scale 1-5)'] == sun and document["Indoor"]['Outdoor Preference (1: Indoor,  2: Outdoor)'] == placement:
                res.append(document)

        return res

    def retrieve_recipe(self, plant_id):
        return 


    def get_season(self):
        seasons = {
            "Autumn": range(3, 6),   # March to May
            "Winter": range(6, 9),   # June to August
            "Spring": range(9, 12),  # September to November
            "Summer": [12, 1, 2]     # December to February
        }

        current_date = datetime.date.today()
        current_month = current_date.month


        # Determine the season
        for season, months in seasons.items():
            if current_month in months:
                return season

        return "Unknown"