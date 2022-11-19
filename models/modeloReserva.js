import mongoose from 'mongoose';

//definiendo nuestro esquema de datos
const Schema = mongoose.Schema;

const EsquemaReserva=new Schema({

    fechaEntrada:{
        require:true,
        type:Date
    },
    fechaSalida:{
        require:true,
        type:Date
    },
   numeroNiños:{
        require:true,
        type:Number
   },
   idHabitacion:{
        require:true,
        type:String
   },
   costo:{
        require:true,
        type:Number
   }

});

export const modeloReseva=mongoose.model('reserva',EsquemaReserva)