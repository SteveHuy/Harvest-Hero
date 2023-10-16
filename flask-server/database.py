from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
import certifi
from pprint import pprint
import datetime

class database:
    """
    The 'database' class is responsible for connecting to a MongoDB database and handling data retrieval operations.
    """
    def __init__(self):
        """
        Constructor for the 'database' class.

        Initializes the class with a connection to a MongoDB server and relevant collections.
        """
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

        self.crop = self.db.new_crop

        self.recipe = self.db.recipe

        self.area = self.db.area

    
    def retrieve_area(self, region: str):
        """
        Retrieve area data from the database for a specified region and season.

        Parameters:
        - region (str): The name of the region to retrieve data for.

        Returns:
        - res (list): A list of documents matching the specified region and season.
        """
        res = []
        cursor = self.area.find()
        season = self.get_season()

        for document in cursor:
            if region in document["area_name"] and season in document['season']:
                res.append(document)
        return res
    

    def retrieve_plant(self, rainfall: int, rainfall_range:int, temperature: int, sun: int, sun_range: int, placement: int):
        """
                Retrieve plant data from the database based on specified criteria.

        Parameters:
        - rainfall (int): The desired rainfall scale.
        - rainfall_range (int): The desired rainfall range scale.
        - temperature (int): The desired temperature scale.
        - sun (int): The desired sunlight scale.
        - sun_range (int): The desired sunlight range scale.
        - placement (int): The placement preference (1 for indoors, 2 for outdoors).

        Returns:
        - res (list): A list of documents matching the specified criteria.
        """
        cursor = self.crop.find()
        res = []
        if placement == 1: #indoors
            for document in cursor:
                if document['Indoor/Outdoor Preference (1: Indoor,  2: Outdoor)'] == placement:
                    res.append(document)
        else:
            for document in cursor:
                if (rainfall <= document['Rainfall (Scale 1-5)'] <= rainfall_range) and document['Temperature (Scale 1-5)'] == temperature and (sun_range <= document['Sunlight Requirement (Scale 1-5)'] <= sun):
                    res.append(document)

        return res
    


    def retrieve_recipe(self, plant_id):
        """
        Retrieve plant recipes from the database based on the specified plant ID.

        Parameters:
        - plant_id: The plant ID for which recipes are to be retrieved.

        Returns:
        - res (list): A list of recipes associated with the specified plant ID.
        """
        res = []
        cursor = self.recipe.find()
        for document in cursor:
            if plant_id in document["ids"]:
                document.pop("_id")
                res.append(document)

        return res
    
    


    def get_season(self):
        """
        Determine the current season based on the current date.

        Returns:
        - season (str): The name of the current season.
        """
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