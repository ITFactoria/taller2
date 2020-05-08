const MongoDBModel = function(MongoClient, url){

    //Consulta todos los registros
    //{{HOST}}/registros/
    this.getAll = function(table){
        return new Promise((resolve, reject)=>{})
    };

    //Consulta un registro
    //{{HOST}}/registros/id
    this.getById = function (table, id) {
        return new Promise((resolve, reject)=>{})
    };
    this.delete = function (table, id) {
        return new Promise((resolve, reject)=>{})
    };
    this.create = function (table, params) {
        return new Promise((resolve, reject)=>{})
    };
    
    //Update Table
    //PUT {{HOST}}/registros/{id}
    this.update = function (table, params, id) {
        return new Promise((resolve, reject)=>{})
    };

    //Initialize table
    //POST {{HOST}}/registros/{id}
    this.init = function (table, params) {
        return new Promise((resolve, reject)=>{})
    };

    //Drop table
    //POST {{HOST}}/registros/option/drop
    this.drop = function (table) {
        return new Promise((resolve, reject)=>{})
    };

    return this;    
};
module.exports = MongoDBModel;