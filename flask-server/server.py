from flask import Flask, jsonify, render_template, request
from plant import plant
from database import database
from pprint import pprint 
from flask_cors import CORS



app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

app.config['database'] = database()
app.config['plant'] = plant(app.config['database'])


@app.route('/api/selection1', methods = ['POST'])
def get_type():
    data = request.get_json()
    app.config['plant'].type = data.get('selectedValue') 
    response = {'message': 'type has been selected'}

    print(app.config['plant'].type)

    return jsonify(response)

@app.route('/api/selection2', methods = ['POST'])
def get_region():
    data = request.get_json()

    app.config['plant'].region = data.get('selectedValue')


    app.config['plant'].set_region_factors()
    response = {'message': 'region has been selected'}

    print(app.config['plant'].region)
    return jsonify(response)


@app.route('/api/selection3', methods = ['POST'])
def get_placement():
    data = request.get_json()

    app.config['plant'].placement = data.get('selectedValue') 
    response = {'message': 'placement has been selected'}
    print(app.config['plant'].placement)

    return jsonify(response)

@app.route('/api/selection4', methods = ['POST'])
def get_shade():
    data = request.get_json()

    shade = data.get('selectedValue')
    current = app.config['plant'].sun

    if current == 1:
        shade = 1
    elif current == 2 and shade == 2:
        shade = 1
    else:
        shade = current - shade
    print(current)
    print(shade)
    app.config['plant'].sun_shade = shade
    response = {'message': 'shade has been selected'}
    print(app.config['plant'].sun_shade)

    return jsonify(response)

@app.route('/api/selection5', methods = ['POST'])
def get_water():
    data = request.get_json()

    water = data.get('selectedValue')
    current = app.config['plant'].rainfall
    if current > 5:
        water = 5
    elif current > 4 and water == 2:
        water = 5
    else:
        water = current + water
    

    print(current)
    print(water)
    app.config['plant'].rainfall_range = water
        

    response = {'message': 'water has been selected'}
    print(app.config['plant'].rainfall_range)
    return jsonify(response)

@app.route('/api/plant')
def plant_selector():

    app.config['plant'].select_plant()
    response = {'message': 'plants have been selected'}
    return jsonify(response)


@app.route('/api/plant/get', methods = ['GET'])
def get_plants():
    data = app.config['plant'].set_json_data()
    return jsonify(data)

@app.route('/api/plant/recipe', methods = ['GET','POST'])
def get_recipe():
    if request.get_json() is None:
        response = {"message" : "id is still loading"}
        return jsonify(response)
    plant_id = int(request.get_json())
    print(plant_id)
    recipe_id = app.config['plant'].json_data[plant_id]['recipe_id']

    recipe = app.config['plant'].set_recipes(recipe_id)
    return jsonify(recipe)


if __name__ == "__main__":
    app.run()