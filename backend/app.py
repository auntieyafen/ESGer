from flask import Flask, jsonify, render_template, request
from flask_cors import CORS
from db import connect, insert_data, getCompanies, getCompanyContent
import json


app = Flask(__name__, static_folder='../build', static_url_path='/')
CORS(app, supports_credentials=True)
CORS(app, resources={r"/.*": {"origins": ["*"]}})

@app.route('/')
def index():
    return app.send_static_file('index.html')
    
@app.route("/db")
def data_input():
    curr_db = insert_data()
    # print(curr_db)
    # return jsonify(curr_db)
    return curr_db

@app.route("/companies")
def allCompany():
    data = getCompanies()
    return json.dumps(data, ensure_ascii=False)

@app.route("/companies/content/<comp_id>")
def getCompanyDetail(comp_id):
    data = getCompanyContent(comp_id)
    return json.dumps(data, ensure_ascii=False)

if __name__ == '__main__':
    print("Starting app...")
    app.run(host="0.0.0.0", port=8000, debug=True)