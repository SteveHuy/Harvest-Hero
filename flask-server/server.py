from flask import Flask, jsonify, render_template, request
from plant import plant
from database import database
from pprint import pprint 



app = Flask(__name__)

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

    if shade != 0:
        current = app.config['plant'].sun
        current = current - shade
        if current <= 1:
            current = 1
      
    app.config['plant'].sun = current
    response = {'message': 'shade has been selected'}
    print(app.config['plant'].sun)

    return jsonify(response)

@app.route('/api/selection5', methods = ['POST'])
def get_water():
    data = request.get_json()

    water = data.get('selectedValue')

    if water != 0:
        current = app.config['plant'].rainfall
        current = current + water
        if current > 5:
            current = 5
      
    app.config['plant'].rainfall = current
    response = {'message': 'water has been selected'}
    print(app.config['plant'].rainfall)
    return jsonify(response)

@app.route('/api/plant')
def plant_selector():
    print("i am working")
    app.config['plant'].print()

    app.config['plant'].select_plant()
    print(app.config['plant'].plants)
    response = {'message': 'plants have been selected'}
    return jsonify(response)


@app.route('/api/plant/get', methods = ['GET'])
def get_plants():
    print(app.config['plant'].plants)
    data = []
    for i in range(len(app.config['plant'].plants)):
        current_plant = {'id', i}
        current_plant.append(app.config['plant'].plants[i])
        data.append(current_plant)

    print(data)
    return jsonify(data)
# make the recipe finder 




if __name__ == "__main__":
    app.run("localhost", port = 5000, debug=True)