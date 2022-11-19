import { modeloHabitacion } from "../models/modeloHabitacion.js";

    export  class ServicioHabitacion{

            async agregarHabitacion(habitacion){
                    let nuevaHabitacion = new modeloHabitacion(habitacion)
                    return await nuevaHabitacion.save()
            }
            async buscarTodasHabitacion(){
                    let habitacionesEncontradas = await modeloHabitacion.find()
                    return habitacionesEncontradas 

            }
            async buscarHabitacion(id){
                    let habitacionEncontrada = await modeloHabitacion.findById(id)
                    return habitacionEncontrada
            }
            async editarHabitacion(id,datosNuevos){
                return await modeloHabitacion.findIdAndUpdate(id,datosNuevos)
            }

            }