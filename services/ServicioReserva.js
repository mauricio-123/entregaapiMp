import { modeloReseva } from "../models/modeloReserva.js"

    export  class ServicioReserba{

            async agregarReserva(reserva){
                    let nuevaReserva = new modeloReseva(reserva)
                    return await nuevaReserva.save()
            }
            async buscarTodasReserva(){
                    let ReservaEncontradas = await modeloReseva.find()
                    return habitacionesEncontradas 

            }
            async buscarReserva(id){
                    let ReservaEncontrada = await modeloReseva.findById(id)
                    return ReservaEncontrada
            }
            async editarReserva(id,datosNuevos){
                return await modeloReseva.findIdAndUpdate(id,datosNuevos)
            }

            }