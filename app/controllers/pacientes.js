
//module.exports = function (databaseConfig) {
    
    var express = require('express');
    var router = express.Router();
    var databaseConfig = require('../utils/database');
    //var db = require('../utils/database');
    
    let model;
    const TABLE = "pacientes";
    

    console.log("pacientes.js", databaseConfig.default);
    //model = require('../models/sqlite-model')(databaseConfig.sqlite);
    //model = require('../models/sqlite-model')(db);
            

    switch (databaseConfig.default) {
        case 'sqlite': {
            console.log("sqlite model");
            model = require('../models/sqlite-model')(databaseConfig.sqlite);
            break;
        }
        case 'mongodb': {
            console.log("mongodb model");
            model = require('../models/mongodb-model')(databaseConfig.mongodb, databaseConfig.mongodb_url);
            break;

        }
        default: {
            console.log("default model");
            model = require('../models/sqlite-model')(databaseConfig.sqlite);
            break;

        }
    }




    //var strTableCreacion = '(id: INT, nombres: TEXT, apellidos: TEXT, telefono: TEXT, direccion: TEXT,ciudad: TEXT,estado: TEXT, pais: TEXT, password: TEXT,fechaNacimiento: TEXT, sexo: TEXT, fechaHoraCreacion: TEXT)'



    //Init Table
    ////POST {{HOST}}/option/init
    router.post('/options/init', function (req, res) {
        console.log("pcientes-init::::");
        model.init(TABLE, req.body)
            .then((message) => {
                res.json({
                    "message": `Table " ${TABLE} " created succesfully`
                })
            }).catch((error) => {
                console.error(error);
                res.status(400).json({ "error": error.message });
            });
    });

    //Drop Table
    ////POST {{HOST}}/option/drop
    router.post('/options/drop', function (req, res) {
        model.drop(TABLE)
            .then((message) => {
                res.json({
                    "message": `Table " ${TABLE} " deleted successfully.`
                })
            }).catch((error) => {
                console.error(error);
                res.status(400).json({ "error": error.message });
            });
    });





    //GET Records
    //GET {{HOST}}/registros
    router.get('/', function (req, res) {
        model.getAll(TABLE)
            .then((rows) => {
                res.json({
                    "message": "success",
                    "data": rows
                })
            }).catch((error) => {
                console.error(error);
                res.status(400).json({ "error": error.message });
            });
    });

    //GET record
    //GET {{HOST}}/registros/id
    router.get('/:id', function (req, res) {
        let id = req.params.id;
        console.log("pacientesgetbyid :", id)
        model.getById(TABLE, id)
            .then((row) => {
                res.json({
                    "message": "success",
                    "data": row
                })
            }).catch((error) => {
                console.error(error);
                res.status(400).json({ "error": error.message });
            });
    });

    //Update record
    //PUT {{HOST}}/registros/id
    router.put('/:id', function (req, res) {
        let id = req.params.id;
        model.update(TABLE, req.body, id)
            .then((row) => {
                res.json({
                    "message": "success",
                    "data": row
                })
            }).catch((error) => {
                console.error(error);
                res.status(400).json({ "error": error.message });
            });
    });



    //Delete Method

    router.delete('/:id', function (req, res) {
        let id = req.params.id;
        model.delete(TABLE, id)
            .then((message) => {
                res.json({
                    "message": "success",
                    "data": message
                })
            }).catch((error) => {
                console.error(error);
                res.status(400).json({ "error": error.message });
            });
    });


    //POST Method
    router.post('/', function (req, res) {
        console.log("body: ", req.body);

        model.create(TABLE, req.body)
            .then((object) => {
                res.json({
                    "message": "success",
                    "data": object
                })
                //res.send(object);

            })
            .catch((error) => {
                console.log(error);
                //res.send(error);
                res.status(400).json({ "error": error.message });

            });



    });

    //return router
    module.exports = router;


//}

