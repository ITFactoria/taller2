const SQLiteModel = function (sqlite) {

    //Consulta todos los registros
    //{{HOST}}/registros/
    this.getAll = function (table) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                sqlite.all("SELECT * FROM " + table, function (error, rows) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows);
                    }
                })
            })
        })
    };

    //Consulta un registro
    //{{HOST}}/registros/id
    this.getById = function (table, id) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                sqlite.all(`SELECT * FROM ${table} WHERE id = ${id}`, function (error, rows) {
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(rows[0]);
                    }
                })
            })
        })
    };

    //Elimina un registro
    //{{HOST}}/registros/id
    this.delete = function (table, id) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                let query = `DELETE FROM ${table} WHERE id = ${id}`;
                try {
                    sqlite.run(query);
                    resolve(`El registro con ID = ${id} fue eliminado`);
                }
                catch (error) {
                    reject(error);
                }
            })
        })
    };


    //Crea un registro
    //POST {{HOST}}/registros
    this.create = function (table, params) {
        console.log("params: ", params)
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                let query = `INSERT INTO ${table} (`;
                let columnNames = '';
                let columnValues = '';
                for (let [key, value] of Object.entries(params)) {
                    columnNames += "'" + key + "', ";
                    if (isNaN(value)) {
                        columnValues += "'" + value + "', ";
                    }
                    else {
                        columnValues += value + ", "
                    }

                }
                query += columnNames.substring(0, columnNames.length - 2);
                query += ') VALUES (';
                query += columnValues.substring(0, columnValues.length - 2);
                query += ');';

                console.log("query is", query);
                try {
                    sqlite.run(query);
                    resolve(params);
                }
                catch (error) {
                    reject(error);
                }

            });
        });
    };

    //Update Table
    //PUT {{HOST}}/registros/{id}
    this.update = function (table, params, id) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {

                let query = 'UPDATE ' + table + ' SET '
                let element = '';
                for (let [key, value] of Object.entries(params)) {
                    element += key + '=';
                    if (isNaN(value)) {
                        element += '"' + value + '", ';
                    } else {
                        element += value + ', ';
                    }
                }
                query += element.substring(0, element.length - 2);
                query += ' WHERE id=' + id;
                try {
                    sqlite.run(query);
                    resolve(params);
                } catch (error) {
                    reject(error);
                }
            });
        });
    };



    //Initialize table
    //POST {{HOST}}/registros/{id}
    this.init = function (table, params) {
        console.log("sqlite - init");
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                let query = 'CREATE TABLE IF NOT EXISTS  ' + table + ' (id INTEGER PRIMARY KEY, '
                let element = '';
                for (let [key, value] of Object.entries(params)) {
                    element += key + ' ' + value + ', ';
                }
                query += element.substring(0, element.length - 2);
                query += ');'
                console.log("query creacion", query);

                /*sqlite.run(query, (err) => {
                    if (err) {
                        console.log("ERROR: ", error)
                        reject(error);
                    }
                    else {
                        params.id = 'INTEGER PRIMARY KEY';
                        resolve(params);
                    }
                });*/

                sqlite.run(query, function (error, response) {
                    if (error) {
                        console.log("ERROR: ", error)
                        reject(error);
                    }
                    else {
                        //params.id = 'INTEGER PRIMARY KEY';
                        console.log("responseinit:::", response)
                        resolve(params);
                    }

                })

                /*try {
                    sqlite.run(query);
                    params.id = 'INTEGER PRIMARY KEY';
                    resolve(params);
                } catch (error) {
                    console.log("ERROR: ", error)
                    reject(error);
                }*/




            });





        });
    };

    //Drop table
    //POST {{HOST}}/registros/option/drop
    this.drop = function (table) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                let query = `DROP TABLE IF EXISTS ${table}`;
                try {
                    sqlite.run(query);
                    resolve(`La tabla ${table} fue inicializada`);
                }
                catch (error) {
                    reject(error);
                }
            })
        })
    };
    return this;
};
module.exports = SQLiteModel;