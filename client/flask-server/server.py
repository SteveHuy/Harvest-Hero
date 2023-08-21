from flask import Flask, jsonify, render_template, request
from plant import plant
from database import database



app = Flask(__name__)

app.config['database'] = database()
app.config['plant'] = plant(app.config['database'])


@app.route('/api/selection1', methods = ['POST'])
def get_type():
    data = request.get_json()
    app.config['plant'].type = data.get('selectedValue') 
    response = {'message': 'type has been selected'}
    return jsonify(response)

@app.route('/api/selection2', methods = ['POST'])
def get_region():
    data = request.get_json()

    app.config['plant'].region = data.get('selectedValue')


    app.config['plant'].set_region_factors()
    response = {'message': 'region has been selected'}

    return jsonify(response)


@app.route('/api/selection3', methods = ['POST'])
def get_placement():
    data = request.get_json()

    app.config['plant'].placement = data.get('selectedValue') 
    response = {'message': 'placement has been selected'}
    return jsonify(response)

@app.route('/api/plant')
def plant_selector():
    app.config['plant'].select_plant()
    print(app.config['plant'].plants)
    response = {'message': 'plants have been selected'}
    return jsonify(response)

# make the recipe finder (awaiting daniel)




if __name__ == "__main__":
    app.run("localhost", port = 5000, debug=True)