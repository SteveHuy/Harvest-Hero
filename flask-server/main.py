from database import database
from plant import plant
from pprint import pprint

db = database()

plant_test = plant(db)
plant_test.rainfall = 2
plant_test.type = 'Fruit'
plant_test.sun = 4
plant_test.temp = 3
plant_test.placement = 2

plant_test.select_plant()