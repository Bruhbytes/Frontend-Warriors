# Random Forest Classification

# Importing the libraries
import numpy as np
import pandas as pd

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
# print(classifier.predict(sc.transform([[0,61,1,30,0,0,1,0,225,150,95,28.58,65,103]])))

# Predicting the Test set results
y_pred = classifier.predict(X_test)
# print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.reshape(len(y_test),1)),1))