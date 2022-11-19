//una clase controlador establece los metodos (ACCCIONES)
//que vamos a realizar en BD
//Y ESTA ALINEADO CON EL ARCHIVO DE RUTAS

import { ServicioReserba } from "../services/ServicioReserva.js"
 
export class ControladorReserva{

    constructor(){}

   async agregarReserva(request,response){

        let datosARegistrar=request.body
        let objetoServicio =new ServicioReserba()
        try{
            await objetoServicio.agregarReserva(datosARegistrar)
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




   async consultarReservas(request,response){
    let objetoServicio =new ServicioReserba()
        try{

            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de reservas",
                "datos":await objetoServicio.buscarTodasReserva()
            })

        }catch(error){

            response.status(400).json({
                "mensaje":"fallo en la operacion"+error,
                "datos":null
            })

        }
    }



   async consultarReserva(request,response){
    

        let id=request.params.id
        let objetoServicio =new ServicioReserba()
        try{
            response.status(200).json({
                "mensaje":"Exito en la operacion de busqueda de una reserva",
                "datos":await objetoServicio.buscarReserva()
            })
        }catch(error){
            response.status(400).json({
                "mensaje":"fallo en la operacion "+error,
                "datos":null
            })
        }
    }

   async editarReserva(request,response){
    let objetoServicio =new ServicioReserba()

        let id=request.params.id
        let datosAEditar=request.body

        try{
            await objetoServicio.editarReserva(id,datosAEditar)

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