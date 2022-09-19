export interface ISuscriptor {
    creador: number,
    id: number,
    nombre: string,
    apellido: string,
    domicilio?: string,
    celular?: number,
    dni?: number,
    email?: string,
    genero?: string,
    estado?: string,
    informacionPersonal?: Array<any>,
    socio?: number,
    notas?: string,
    fechaNacimiento?: Date,
}

export interface IInformacionPersonal {
    nombre: string,
    apellido: string,
    domicilio: string,
    correo: string,
    celular: number,
    dni: number,
    notas: string,
    fechaNacimiento: Date,
    genero: string,
    
  
}

export interface IInformacionSuscripcion{
    estado: string,
    socio: number,
    fechaAlta: Date,
    fechaVencimientoSuscripcion: Date,
}

export interface IPago {
    creador: string,
    id: number,
    montoPagoSuscripcion: number,
    notasPagoSuscripcion: string,
    fechaPagoSuscripcion: Date,
    metodoPago: string,
}

export interface IRutina {
    creador: string,
    id: number,
    nombre: string,
    explicacion: string,
    imagen: string
}


export  class ModelSuscriptor {
     informacion: string;
     pagos: Array<IPago> = [];
     rutinas: Array<IRutina> = [];
    
    constructor(informacion: string) {
        this.informacion =  informacion
    }
    getInformacion() {
        return this.informacion
    }
}



