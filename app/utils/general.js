const { General } = require("sqlite3");

const General = function () {

    if (typeof General.firebase == 'undefined') {

        const admin = require("firebase-admin");
        const serviceAccount = require("../private/key.json");

        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://drteddy-cf0a5.firebaseio.com"
        });

        //const firestoreClient = admin.firestore();
        General.firebase = admin;

    }

    if (typeof General.mongoDB == undefined) {
        const mongodbClient = require('mongodb').MongoClient;
        const url = 'mongodb://localhost:27017';
        General.mongoDB ={client: mongodbCliente, url:url}  
    }

    if (typeof General.sqlite == undefined) {
        const sqlite3 = require('sqlite3').verbose();
        //const sqliteClient = new sqlite3.Database('./db/db.sqlite');
        General.sqlite = new sqlite3.Database('')
    }

    this.getFirebase = function(){
        return General.firebase;
    }

    this.getMongodb = function(){
        return General.mongoDB;
    }
    
    this.sqlite = function(){
        return General.sqlite;
    }


    



    return this;
}
module.exports = General;