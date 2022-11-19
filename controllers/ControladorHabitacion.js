//una clase controlador establece los metodos (ACCCIONES)
//que vamos a realizar en BD
//Y ESTA ALINEADO CON EL ARCHIVO DE RUTAS

import { ServicioHabitacion } from "../services/ServicioHabitacion.js"

export class ControladorHabitacion{

    constructor(){}

       async  agregarHabitacion(request,response){
                let datosARegistrar=request.body
                let objetoServicio= new ServicioHabitacion()
                try{
                   await objetoServicio.agregarHabitacion(datosARegistrar)
                    response.status(200).json({
                        "mensaje":"Exito en la operacion",
                        "datos":null
                    })
                }catch(error){
                    response.status(400).json({
                        "mensaje":"Fallamos en la consulta "+error,
                        "datos":null
                    })
                }
            }

  async  consultarHabitaciones(request,response){
    let objetoServicio= new ServicioHabitacion()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de habitaciones",
                "datos": await objetoServicio.buscarTodasHabitacion()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })
        }
    }

 async   consultarHabitacion(request,response){

        let id=request.params.id
        let objetoServicio= new ServicioHabitacion()

        try{

            objetoServicio.editarHabitacion(id,datosAEditar)
            response.status(200).json({
                "mensaje":"Exito en la operacion de buscaqueda de una habitacion",
                "datos":await objetoServicio.buscarHabitacion(id)
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion "+error,
                "datos":null
            })

        }
    }




async    editarHabitacion(request,response){

        let id=request.params.id
        let datosAEditar=request.body

        console.log("EDITANDO A: "+id)
        console.log(datosAEditar)

        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de edicion",
                "datos":null
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"Fallo en la operacion "+error,
                "datos":null
            })

        }
    }



}