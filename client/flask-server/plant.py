from database import database
from pprint import pprint 
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
        print(self.region)
        data = self.db.retrieve_area(self.region)
        # sets rainfall, temp and sun
        self.rainfall = data[0]['rain']
        self.temp = data[0]['temp']
        self.sun = data[0]['sun']
        return 

    def select_plant(self):
        plants = self.db.retrieve_plant(self.rainfall, self.temp, self.sun, self.placement)
        print(plants)
        print(self.print())
        for i in plants:
            if i['Type of Plant'] == self.type:
                self.plants.append(i)
            
        if len(self.plants) == 0:
            print("No Plants for that type was found")
            self.plants = plants
            return 

        return 


    def print(self):
        res = {'Region': self.region,
               'Type': self.type,
               'Placement': self.placement,
               'Rainfall':self.rainfall,
               'Temperature':self.temp,
               'Sun Exposure': self.sun}
        pprint(res)
        return 