from flask import Flask, render_template, request,redirect,jsonify
from pymongo import MongoClient
import numpy as np
import pandas as pd
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'

client = MongoClient("mongodb+srv://Hawkeye:umy0rbhY3VUFquYp@healthcare.iwosepb.mongodb.net/?retryWrites=true&w=majority")
parameters=[]
@app.route('/prediction',methods=["POST"], strict_slashes=False)
@cross_origin()
def get_parameters():
    age=int(request.json['Age'])
    SysBP=int(request.json['SysBP'])
    DiaBP=float(request.json['DiaBP'])
    HR=int(request.json['HR'])
    Glucose=int(request.json['Glucose'])
    totChol=int(request.json['TotChol'])
    CiggsperDay=int(request.json['CiggsperDay'])
        # Gender=request.form['Gender']
    CurrSmok=int(request.json['CurrSmok'])
    BPmeds=int(request.json['BPMeds'])
    Diabetes=int(request.json['Diab'])
    db = client['test']
    collection = db['health']
    result = collection.find({"username":"Om"})
    for item in result:
        bmi=item['bmi']
        Gender=1 if item["gender"]=="Male" else 0
        # print(age,SysBP,DiaBP,HR,Glucose,totChol,CiggsperDay,Gender,CurrSmok,BPmeds,bmi)
    parameters.extend([Gender,age,CurrSmok,CiggsperDay,BPmeds,0,0,Diabetes,totChol,SysBP,DiaBP,bmi,HR,Glucose])
    print(parameters)
    # Importing the dataset
    dataset = pd.read_csv('ML/HD2.csv')
    X = dataset.iloc[:, :-1].values
    y = dataset.iloc[:, -1].values

    #Taking care of the missing values
    from sklearn.impute import SimpleImputer
    inputer=SimpleImputer(missing_values=np.nan,strategy="mean")
    inputer.fit(X[:,:15])
    X[:,:15]=inputer.transform(X[:,:15])

    # Splitting the dataset into the Training set and Test set
    from sklearn.model_selection import train_test_split
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.1, random_state = 0)

    # Feature Scaling
    from sklearn.preprocessing import StandardScaler
    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    X_test = sc.transform(X_test)

    # Training the Random Forest Classification model on the Training set
    from sklearn.ensemble import RandomForestClassifier
    classifier = RandomForestClassifier(n_estimators = 30, criterion = 'entropy', random_state = 0)
    classifier.fit(X_train, y_train)

    # Predicting a new result
    result=classifier.predict(sc.transform([parameters]))
    parameters.clear()
    print(result[0])
    return json.dumps(result[0],default=str)
    # return parameters


if __name__=="__main__":
    app.run(debug=True)