import pymongo
from bson.objectid import ObjectId
import re
import json

def connect():
    client = pymongo.MongoClient("mongodb+srv://esg_consultant:esgg@cluster0.qojb1zf.mongodb.net/?retryWrites=true&w=majority")
    db = client.capstone
    return db

def insert_data():
    db = connect()
    collection = db.esg
    path = "/Users/julialiu/Downloads/資管專題/ESG_consultant/backend/data/data.json"
    with open(path) as file:
        file_data = json.load(file)
        if isinstance(file_data, list):
        # if len(file_data) > 1:
            for data_entry in file_data:
                existing_data = collection.find_one({"name": data_entry["name"]})
                
                if not existing_data:
                   collection.insert_one(data_entry)
        else:
            existing_data = collection.find_one({"name": file_data["name"]})
            
            if not existing_data:
                collection.insert_one(file_data)
    returnData = collection.find()   
    # print(len(list(returnData)))
    # print(json.dumps(list(returnData)))     
    return list(returnData)

def getCompanies():
    db = connect()
    collection = db.esg
    companyList = list(collection.find({}))
    returnData = [{
        'company_id': str(company["_id"]),
        'company_name': company["name"],
        'company_fullname': company["full_name"],
        'company_stock_symbol': company["stock_symbol"],
        'company_stock_price': company["stock_price"],
        'industry_field': company["industry_field"],
        'industry_name': company["industry_name"],
        'company_stream_pos': company["stream_pos"],
        'company_description': company["description"],
    } for company in companyList]
    
    # print(returnData)
    return returnData

def getCompanyContent(comp_id):
    db = connect()
    collection = db.esg
    company_id = ObjectId(comp_id)
    content = collection.find_one({ '_id': company_id })
    
    returnData = {
        'company_id': str(content["_id"]),
        'company_name': content["name"],
        'company_e': content["e_score"],
        'company_s': content["s_score"],
        'company_g': content["g_score"],
        'company_es': content["e_detail_score"],
        'company_ss': content["s_detail_score"],
        'company_gs': content["g_detail_score"]
    }
    
    return returnData