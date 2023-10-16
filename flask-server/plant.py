from database import database
from pprint import pprint 
import random

class plant:
    """
    The 'plant' class provides functionality for selecting plants based on user-defined criteria.
    """
    def __init__(self, database: database):
        """
        Constructor for the 'plant' class.

        Parameters:
        - database (database): An instance of the 'database' class used for data retrieval.

        Initializes the class with default settings and attributes.
        """
        #default settings
        self.region = "Karratha"
        self.type = "Fruit" 
        self.placement = 2 #2 refers to outdoors

        self.rainfall = 1
        self.temp = 3
        self.sun = 3

        #range 
        self.rainfall_range = 1
        self.sun_range = 3
        #database
        self.db = database

        self.plants = []

        self.json_data = []

        # scales
        self.sunlight_scale = {
    1: "Low 0 - 2 kWh/m^2",
    2: "Low to Moderate 2 - 4 kWh/m^2",
    3: "Moderate 4 - 6 kWh/m^2",
    4: "High 6 - 8 kWh/m^2",
    5: "Very High 8+ kWh/m^2"
}
        self.rainfall_scale = {
                1: "Very Low 0 - 10 mm",
    2: "Low 11 - 25 mm",
    3: "Moderate 26 - 50 mm",
    4: "High 51 - 75 mm",
    5: "Very High 76+ mm"
        }

        self.temperature_scale = {
            1: "Very Low 0 - 10 °C",
    2: "Low 11 - 20 °C",
    3: "Moderate 21 - 30 °C",
    4: "High 31 - 40 °C",
    5: "Very High 41+ °C"
    }
    # set the attributes via the front end
    def set_type(self, type: str):
        """
        Set the plant type based on user input.

        Parameters:
        - type (str): The selected plant type.

        Returns:
        None
        """
        self.type = type
        return 
    
    
    def set_region(self, region: str):
        """
        Set the region based on user input.

        Parameters:
        - region (str): The selected region.

        Returns:
        None
        """
        self.region = region
        return
    
    def set_placement(self, placement: int):
        """
        Set the placement based on user input.

        Parameters:
        - placement (int): The selected placement code.

        Returns:
        None
        """
        self.placement = placement
        return 

    def set_region_factors(self):
        """
        Set region-specific factors for rainfall, temperature, and sunlight based on the selected region.

        Retrieves data from the database for the specified region and updates class attributes accordingly.

        Parameters:
        None

        Returns:
        None
        """
        data = self.db.retrieve_area(self.region)
        # sets rainfall, temp and sun
        self.rainfall = data[0]['rain']
        self.temp = data[0]['temp']
        self.sun = data[0]['sun']
        self.rainfall_range = data[0]['rain']
        self.sun_range = data[0]['sun']

        return 

    def select_plant(self):
        """
        Select suitable plants based on user-defined criteria.

        Retrieves a list of plants from the database that match the specified criteria (rainfall, temperature, sunlight, and placement). Filters the results by plant type, updates the 'plants' attribute, and handles the case when no matching plants are found.

        Parameters:
        None

        Returns:
        None
        """
        self.plants = []
        plants = self.db.retrieve_plant(self.rainfall, self.rainfall_range, self.temp, self.sun, self.sun_range, self.placement)
        pprint(plants)
        for i in plants:
            if i['Type of Plant'] == self.type:
                self.plants.append(i)
        
        if len(self.plants) == 0:
            print("No Plants for that type was found")
            self.plants = plants
            return 

        return 

    def set_json_data(self):
        """
        Create JSON data for plant recommendations.

        Generates a JSON representation of plant data, including attributes like name, description, recipe ID, recommended sunlight, rainfall, and temperature ranges.

        Parameters:
        None

        Returns:
        data (list): A list of JSON data for plant recommendations.
        """
        data = []
        for i in range(len(self.plants)):
            id = {'_id' : i}
            name = {'Crop' : self.plants[i]['Crop']}
            desc = {'Desc': self.plants[i]['desc']}
            recipe = {"recipe_id" : self.plants[i]["new_id"]}
            sun = {"sun": "The recommended sun range is: " + self.sunlight_scale[self.plants[i]["Sunlight Requirement (Scale 1-5)"]]}
            rainfall = {"rainfall":"The recommended rainfall range is: " + self.rainfall_scale[self.plants[i]['Rainfall (Scale 1-5)']]}
            temperature = {"temperature" : "The recommended temperature range is: " + self.temperature_scale[self.plants[i]['Rainfall (Scale 1-5)']]}
            id.update(name)
            id.update(desc)
            id.update(recipe)
            id.update(sun)
            id.update(rainfall)
            id.update(temperature)

            data.append(id)
        self.json_data = data
        return data


    def set_recipes(self, plant_id):
        """
        Retrieve plant recipes from the database.

        Retrieves plant recipes based on the provided plant ID. Randomly shuffles the recipes and returns up to 5 of them.

        Parameters:
        - plant_id (str): The ID of the plant for which recipes are to be retrieved.

        Returns:
        recipes (list): A list of up to 5 plant recipes.
        """
        recipes = self.db.retrieve_recipe(plant_id)
        if len(recipes) > 5:
            random.shuffle(recipes)
        return recipes[:5]

    def print(self):
        """
        Print user-defined and calculated plant attributes.

        Prints the selected region, plant type, placement, rainfall, temperature, sunlight, rainfall range, and sunlight range.

        Parameters:
        None

        Returns:
        None
        """
        res = {'Region': self.region,
               'Type': self.type,
               'Placement': self.placement,
               'Rainfall':self.rainfall,
               'Temperature':self.temp,
               'Sun Exposure': self.sun,
               'Rainfall Range':self.rainfall_range,
               'Sun Range': self.sun_range}
        pprint(res)
        return 