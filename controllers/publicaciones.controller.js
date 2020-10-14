const publicaciones = require("../entity/publicaciones/publicaciones.models");


const getPublicaciones = async(req,res) =>{
    try{
        const listaPublicaciones = await publicaciones.traerPublicaciones();
        res.status(200).json({
            status : "OK",
            result : listaPublicaciones,
        })
    }
    catch(error){
        console.log(error);
    }
}

const getPublicacionByID = async (req, res) =>{
    try{
        const id = req.params.id;
        const publicacion = await publicaciones.traerPublicacionPorId(id);
        res.status(200).json({
            status : 'OK',
            result : publicacion
        })

    }
    catch(error){
        console.log(error);
    }
}

const deletePublicacionById = async (req, res) =>{
    try{
        const id = req.params.id;
        console.log(id);
        const publicacion = await publicaciones.eliminarPublicacionPorId(id);
        res.status(200).json({
            status : 'OK',
            result : publicacion
        })

    }
    catch(error){
        console.log(error);
    }
}

const createPublicacion = async (req, res) => {
    try{
        const nuevaPublicacion = req.body
        const publicacion = await publicaciones.crearPublicacion(nuevaPublicacion);
        res.status(200).json({
            status : 'OK',
            result : publicacion
        })

    }
    catch(error){
        console.log(error);
    }
}
module.exports = {
    getPublicaciones,
    getPublicacionByID,
    deletePublicacionById,
    createPublicacion
}