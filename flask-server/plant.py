from database import database
from pprint import pprint 
import random

class plant:

    def __init__(self, database: database):
        #default settings
        self.region = "Karratha"
        self.type = "Fruit" 
        self.placement = 2 #2 refers to outdoors

        self.rainfall = 1
        self.temp = 3
        self.sun = 3
    
        #database
        self.db = database

        self.plants = []

        self.json_data = []
    # set the attributes via the front end
    def set_type(self, type: str):
        self.type = type
        return 
    
    
    def set_region(self, region: str):
        self.region = region
        return
    
    def set_placement(self, placement: int):
        self.placement = placement
        return 

    # stuff that doesn't need the front end 
    def set_region_factors(self):
        data = self.db.retrieve_area(self.region)
        # sets rainfall, temp and sun
        self.rainfall = data[0]['rain']
        self.temp = data[0]['temp']
        self.sun = data[0]['sun']
        return 

    def select_plant(self):
        self.plants = []
        plants = self.db.retrieve_plant(self.rainfall, self.temp, self.sun, self.placement)
        for i in plants:
            if i['Type of Plant'] == self.type:
                self.plants.append(i)
                 
        
        if len(self.plants) == 0:
            print("No Plants for that type was found")
            self.plants = plants
            return 

        return 

    def set_json_data(self):
        data = []
        for i in range(len(self.plants)):
            id = {'_id' : i}
            name = {'Crop' : self.plants[i]['Crop']}
            desc = {'Desc': self.plants[i]['desc']}
            recipe = {"recipe_id" : self.plants[i]["new_id"]}
            id.update(name)
            id.update(desc)
            id.update(recipe)

            data.append(id)
        self.json_data = data
        return data


    def set_recipes(self, plant_id):
        recipes = self.db.retrieve_recipe(plant_id)
        if len(recipes) > 5:
            random.shuffle(recipes)
        return recipes[:5]

    def print(self):
        res = {'Region': self.region,
               'Type': self.type,
               'Placement': self.placement,
               'Rainfall':self.rainfall,
               'Temperature':self.temp,
               'Sun Exposure': self.sun}
        pprint(res)
        return 