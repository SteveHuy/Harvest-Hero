import json

#open and read vegetation data
crop = open('harvest-hero-a01de-default-rtdb-vegetation-export.json')
crop_data = json.load(crop)

#open and read recipe data
recipe = open('recipes.json')
recipe_data = json.load(recipe)

#make an id for vegetation data
id = 1
for crop in crop_data:
    crop['id'] = id
    id += 1

#iterate through each recipe
for ing in recipe_data:
    #iterate through recipes
    counter = 0
    ing['ids'] = []
    #iterate through ingredients to allocate ingredient id
    for item in ing['Ingredients']:
        #check if the substring matches against crop
        for crop in crop_data:
            if crop['Crop'].lower() in item.lower():
                ing['ids'].append(crop['id'])
                print('match found')

matches = []
#filter for recipes with matches
for ing in recipe_data:
    #recipes with crop matches: insert to matches list
    if len(ing['ids']) > 0:
        matches.append(ing)

jsonString = json.dumps(matches)
jsonFile = open("new_recipes.json","w")
jsonFile.write(jsonString)
jsonFile.close()





