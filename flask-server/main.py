from database import database
from plant import plant
from pprint import pprint

db = database()

plant_test = plant(db)
plant_test.rainfall = 2
plant_test.rainfall_range = 5

plant_test.type = 'Fruit'
plant_test.sun = 5
plant_test.sun_range = 2
plant_test.temp = 4
plant_test.placement = 2

plant_test.select_plant()
for i in plant_test.plants:
    print(i["Rainfall (Scale 1-5)"])
    print(i['Sunlight Requirement (Scale 1-5)'])
plant_test.set_json_data()




