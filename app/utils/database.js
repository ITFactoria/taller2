
//SQLite Client Config
const sqlite3 = require('sqlite3').verbose();
const sqliteClient = new sqlite3.Database('./db/db.sqlite');
//const db = new sqlite3.Database('./db/db.sqlite');

//MongoDB Client Config
const mongodbClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';


//FirebaseDB config
const admin = require("firebase-admin");
const serviceAccount = require("../private/key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://drteddy-cf0a5.firebaseio.com"
});
const firestoreClient = admin.firestore();

//Select backend
const databaseConfig ={
    "sqlite" : sqliteClient,
    "mongodb" : mongodbClient,
    "mongodb_url": url,
    "firestore": firestoreClient,
    "default" : 'firestore'
}

//Export module
module.exports = databaseConfig
