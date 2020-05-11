let ObjectId = require('mongodb').ObjectId;

const MongoDBModel = function (MongoClient, url) {

    //Database name
    const dbName = 'drteddy';


    //Get collection
    this.getAll = function (table) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, client) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                else {
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.find({}).toArray(function (errorGetAll, result) {
                        resolve(result);
                        client.close();
                    })
                }
            })
        })
    };

    //get Doccument by Id
    this.getById = function (table, id) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, client) {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    let database = client.db(dbName);
                    const collection = database.collection(table);

                    collection.findOne({ _id: new ObjectId(id) }, function (errorGetById, result) {
                        if (errorGetById) {
                            console.error(errorGetById)
                            reject(errorGetById);
                        }
                        resolve(result);
                        client.close();
                    });
                }
            });
        });
    };

    //Create document
    this.create = function (table, params) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, client) {
                if (error) {
                    console.error(error);
                    reject(error);
                }
                else {
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.insertOne(params, function (erorInsert, result) {
                        if (erorInsert) {
                            console.error(erorInsert);
                            reject(erorInsert);
                        }
                        else {
                            resolve(result);
                            client.close();
                        }
                    })
                }
            })
        })
    };


    //Update document
    this.update = function (table, params, id) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, client) {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.updateOne({ _id: new ObjectId(id) }, { $set: params }, function (errorUpdate, result) {
                        if (errorUpdate) {
                            reject(errorUpdate);
                        } else {
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });
    };

    //Delete document
    this.delete = function (table, id) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, client) {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.deleteOne({ _id: new ObjectId(id) }, function (errorDelete, result) {
                        if (errorDelete) {
                            console.error(errorDelete);
                            reject(errorDelete);
                        } else {
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });
    };

    //clean collection
    this.clean = function (table) {
        return new Promise((resolve, reject) => {
            MongoClient.connect(url, function (error, client) {
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    let database = client.db(dbName);
                    const collection = database.collection(table);
                    collection.remove({}, function (errorDrop, result) {
                        if (errorDrop) {
                            reject(errorDrop);
                        } else {
                            resolve(result);
                            client.close();
                        }
                    });
                }
            });
        });

    };

    //init collection
    this.initialize = function (table, params) {
        return new Promise((resolve, reject) => {
            resolve('No aplica para MongoDB');
        });
    };


    return this;
};
module.exports = MongoDBModel;