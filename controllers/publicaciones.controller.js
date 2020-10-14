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


module.exports = {
    getPublicaciones
}