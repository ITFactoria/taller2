

const FirestoreModel = function (firestore) {

    //Database name
    const dbName = 'drteddy-cf0a5';

    //Get collection
    this.getAll = function (table) {
        return new Promise((resolve, reject) => {
            firestore.collection(table).get()
                .then((registros) => {
                    let respuesta = [];
                    registros.forEach((registro) => {
                        let elemento = registro.data();
                        elemento.id = registro.id;
                        respuesta.push(elemento)
                    })
                    resolve(respuesta);
               })
                .catch((error) => { 
                    console.error(error);
                    reject(error)
                })
        })
    };

    //get Doccument by Id
    this.getById = function (table, id) {
        return new Promise((resolve, reject) => {
            firestore.collection(table).doc(id).get()
                .then((registro) => {
                    if (registro.exists) {
                        let respuesta = registro.data();
                        respuesta.id = registro.id;
                        resolve(respuesta);
                        
                    }
                    else {
                        console.log("noexisteeee");
                        //reject({error:`El elemento en la coleccion ${table} no existe` })
                        reject('El elemento no existe');
                    }
                })
                .catch((error) => { 
                    console.error(error);
                    
                    reject(error);
                })
        })
    };

    //Create document
    this.create = function (table, params) {
        return new Promise((resolve, reject) => {
            firestore.collection(table).add(params)
            .then((respuesta)=>{
                params.id = respuesta.id;
                resolve(params)
            })
            .catch((error)=>{
                console.error(error);
                reject(error);
            })
        })
    };


    //Update document
    this.update = function (table, params, id) {
        return new Promise((resolve, reject) => {
            firestore.collection(table).doc(id).update(params)
            .then((respuesta)=>{
                params.id = respuesta.id;
                resolve(params)
            })
            .catch((error)=>{
                console.error(error);
                reject(error);
            })
        })
        
    };

    //Delete document
    this.delete = function (table, id) {
        return new Promise((resolve, reject) => {
            firestore.collection(table).doc(id).delete()
            .then((respuesta)=>{
                resolve(`Elemento eliminado ${id}`);
            })
            .catch((error)=>{
                console.error(error);
                reject(error);
            })
        })
        
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
module.exports = FirestoreModel;