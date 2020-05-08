export class citaMedica {
    id= number;
    fechaHoraCreacion = Date;
    fechaHoraInicioAtencion =Date;
    fechaHoraFinAtencion= Date;
    idPaciente= Number;
    diagnostico= String;
    tratamiento= String;
    calificacion= Number;
    //examenes: [examen],
    //interacciones: [interaccion],
    examenes= [];
    interacciones= [];

}