
//SQLite Client Config
const sqlite3 = require('sqlite3').verbose();
const sqliteClient = new sqlite3.Database('./db/db.sqlite');
const db = new sqlite3.Database('./db/db.sqlite');

//MongoDB Client Config
const mongodbClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';

const databaseConfig ={
    "sqlite" : sqliteClient,
    "mongodb" : mongodbClient,
    "mongodb_url": url,
    "default" : 'sqlite'
}

console.log("database.js: ", databaseConfig.default)
//module.exports = databaseConfig
module.exports = db
