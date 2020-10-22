const organizaciones = require("../organizaciones/organizaciones.models");

const getOrganizaciones = async(req, res) => {
    try{
        const listaOrganizaciones = await organizaciones.traerOrganizaciones();
        if ( listaOrganizaciones.message != 'Error'){
            return res.status(200).json({
                status: "OK",
                result: listaOrganizaciones.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: listaOrganizaciones.message,
            });
        }
    }
    catch(e) {
        return res.status(400).json({
            status: "Error",
            message: "Error getOrganizaciones"
        });
    }
}

const getOrganizacionesById = async (req, res) => {
    try{
        const id = req.params.id;
        const organizacion = await organizaciones.traerOrganizacionPorId(id);
        if (organizacion.message != 'Error'){
            return res.status(200).json({
                status: "OK",
                result:  organizacion.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: organizacion.message,
            });
        }
    } catch(e){
        console.log(e);
    }
}

const deleteOrganizacionById = async (req, res) => {
    try{
        const id = req.params.id;
        const organizacion = await organizaciones.eliminarOrganizacionPorId(id);
        res.status(200).json({
            status: "OK",
            result: organizacion
        })
    } catch(e){
        console.log(e);
    }
}

const createOrganizacion = async (req, res) => {
    try{
        const nuevaOrganizacion =  req.body;
        const organizacion = await organizaciones.crearOrganizacion (nuevaOrganizacion);
        req.status(200).json({
            status: "Ok",
            result: organizacion
        })
    } catch(e){
        console.log(e);
    }
}

const updateOrganizacion = async (req, res) => {
    try{
        const organizacionEditada = req.body;
        const organizacion = await organizaciones.editarOrganizacion(organizacionEditada);
        res.status(200).json({
            status: "Ok",
            response: organizacion
        })
    } catch (e){
        console.log(e);
    }
}

module.exports = {
    getOrganizaciones,
    getOrganizacionesById,
    deleteOrganizacionById,
    createOrganizacion,
    updateOrganizacion
}