
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');


//const sqlite3 = require('sqlite3').verbose();
//let db = new sqlite3.Database('./db/db.sqlite');

var controllerPacientes = require('./app/controllers/pacientes');
var controllerCitas = require('./app/controllers/citas');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/pacientes', controllerPacientes);
app.use('/citas', controllerCitas);


//app.get('/hello', (req, res) => res.send('Hello World!'))

app.listen(port, function () {
    console.log(`Listening at the port ${port}`);
});





/*aplicacion.get('/users', function (request, response) {
    //let administradores = [administrador];
    //let pacientes = [paciente];
    let pacientes = [];
    let examenes =[];
    let interacciones = [];
    let citasMedicas =[];
    


    administrador = {
        id: Number,
        nombres: String,
        apellidos: String,
        telefono: String,
        direccion: String,
        ciudad: String,
        estado: String,
        pais: String,
        password: String,
    };

    examen = {
        id: Number,
        idCitaMedica : Number,
        fechaHoraCreacion: Date,
        idPaciente: Number,
        idCitaMedica: Number
    }
    interaccion = {
        id: Number,
        idCitaMedica : Number,
        pregunta: String,
        respuesta: String
    };

    citaMedica = {
        id: Number,
        fechaHoraCreacion: Date,
        fechaHoraInicioAtencion: Date,
        fechaHoraFinAtencion: Date,
        idPaciente: Number,
        diagnostico: String,
        tratamiento: String,
        calificacion: Number,
        //examenes: [examen],
        //interacciones: [interaccion],
        examenes: [],
        interacciones: [],
    }
    paciente = {
        id: Number,
        nombres: String,
        apellidos: String,
        telefono: String,
        direccion: String,
        ciudad: String,
        estado: String,
        pais: String,
        password: String,
        fechaNacimiento: Date,
        sexo: Boolean,
        fechaHoraCreacion: Date,
        //citasMedicas: [citaMedica],
        //examenes: [examenes]
        citasMedicas: [],
        examenes: []

    };

    //Asignaciones
    //Interacciones
    let interaccion1 = {
        id: 1,
        idCitaMedica : 1,
        pregunta: "Buenos dias",
        respuesta: "Buenos dias, como se encuentra hoy?"
    };
    let interaccion2 = {
        id: 2,
        idCitaMedica : 1,
        pregunta: "Tengo dolor de rodilla",
        respuesta: "Muy bien, tiene algun examen diagnostico que nos pueda suministrar?"
    };
    interacciones.push(interaccion1, interaccion2);


    //Examenes
    let examen1 = {
        id: 1,
        idCitaMedica: 1,
        fechaHoraCreacion: 13-01-2019,
        descripcion: "radiografia columna",
        idPaciente: 1,
        idCitaMedica: 1
    }
    let examen2 = {
        id: 2,
        idCitaMedica: 1,
        fechaHoraCreacion: 13-01-2019,
        descripcion: "radiografia rodilla",
        idPaciente: 1,
        idCitaMedica: 1
    }
    examenes.push(examen1,examen2);

    //Citas Medicas
   citaMedica1 = {
        id: 1,
        fechaHoraCreacion: 13/01/2019,
        fechaHoraInicioAtencion: 13/01/2019,
        fechaHoraFinAtencion: 13/01/2019,
        idPaciente: 1,
        diagnostico: "Esguince grado 1",
        tratamiento: "Sesiones de hielo y calor por 30 minutos",
        calificacion: 4,
        examenes,
        interacciones,
    }
    citaMedica2 = {
        id: 2,
        fechaHoraCreacion: 13/01/2019,
        fechaHoraInicioAtencion: 13/01/2019,
        fechaHoraFinAtencion: 13/01/2019,
        idPaciente: 1,
        diagnostico: "Esguince grado 1",
        tratamiento: "Sesiones de hielo y calor por 30 minutos",
        calificacion: 4,
        examenes,
        interacciones,
    }
    citasMedicas.push(citaMedica1, citaMedica2)

    //Paciente1
    let paciente1 ={
        id : 1,
        nombres : "koby",
        apellidos : "Bryant",
        telefono :679753476,
        direccion : "Av 78 Street 67 NQS",
        ciudad : "miami",
        estado : "Florida",
        pais : "EEUU",
        password : "NBA123",
        fechaHoraCreacion : 13/01/1989,
        sexo : 0, 
        examenes,
        citasMedicas,

    }
    let paciente2 ={
        id : 2,
        nombres : "lebron",
        apellidos : "james",
        telefono :679753476,
        direccion : "Av 78 Street 67 NQS",
        ciudad : "miami",
        estado : "Florida",
        pais : "EEUU",
        password : "NBA456",
        fechaHoraCreacion : 13/01/1989,
        sexo : 0
    }
    let paciente3 ={
        id : 3,
        nombres : "kevin",
        apellidos : "durant",
        telefono :679753476,
        direccion : "Av 78 Street 67 NQS",
        ciudad : "philadelphia",
        estado : "Florida",
        pais : "EEUU",
        password : "NBA789",
        fechaHoraCreacion : 13/01/1989,
        sexo : 0
    }

    pacientes.push(paciente1,paciente2,paciente3);
    
    //response.send(pacientes);
    response.send("Hola prueba")
    
})*/

