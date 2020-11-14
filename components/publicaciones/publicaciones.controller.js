const publicaciones = require("../publicaciones/publicaciones.models");


const getPublicaciones = async(req,res) =>{
    try{
        const listaPublicaciones = await publicaciones.traerPublicaciones();
        if ( listaPublicaciones.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result: listaPublicaciones.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: listaPublicaciones.message,
            });
        }
    }
    catch(error){
        return res.status(400).json({
            status: "Error",
            message: "Error getPublicaciones"
        });
    }
}

const getPublicacionByID = async (req, res) =>{
    try{
        const id = req.params.id;
        const publicacion = await publicaciones.traerPublicacionPorId(id);
        if ( publicacion.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result: publicacion.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: publicacion.message,
            });
        }

    }
    catch(error){
        return res.status(400).json({
            status: "ERROR",
            result: 'error en getPublicacionById',
        });
    }
}

const deletePublicacionById = async (req, res) =>{
    try{
        const id = req.params.id;
        console.log(id);
        const publicacion = await publicaciones.eliminarPublicacionPorId(id);
        if ( publicacion.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result: publicacion.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: publicacion.message,
            });
        }
    }
    catch(error){
        return res.status(400).json({
            status: "ERROR",
            result: 'error en deletePublicacionByID',
        });
    }
}

const createPublicacion = async (req, res) => {
    try{
        const nuevaPublicacion = req.body
        const publicacion = await publicaciones.crearPublicacion(nuevaPublicacion);
        if ( publicacion.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result: publicacion.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: publicacion.message,
            });
        }

    }
    catch(error){
        return res.status(400).json({
            status: "ERROR",
            result: 'error en createPublicacion',
        });
    }
}
module.exports = {
    getPublicaciones,
    getPublicacionByID,
    deletePublicacionById,
    createPublicacion
}