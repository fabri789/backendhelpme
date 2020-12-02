const donaciones = require('../donaciones/donaciones.models');

const getDonaciones = async (req, res) => {
    try{
        const listaDonaciones = await donaciones.traerDonaciones();
        if ( listaDonaciones.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result: listaDonaciones.message,
            });
        }else{
            return res.status(400).json({
                status: "ERROR",
                result: listaDonaciones.message,
            });
        }
    }catch(e){
        return res.status(400).json({
            status: "Error",
            message: "Error getDonaciones"
        });
    }
}


const getDonacionesById = async (req, res) => {
    try{
        const id = req.params.id;
        const listaDonaciones = await donaciones.traerDonacionesPorId(id);
        if ( listaDonaciones.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result: listaDonaciones.message,
            });
        }else{
            return res.status(400).json({
                status: "ERROR",
                result: listaDonaciones.message,
            });
        }
    }catch(e){
        return res.status(400).json({
            status: "Error",
            message: "Error getDonacionesById"
        });
    }
}

const createDonaciones = async (req, res) => {
    try{
        const donacion = await donaciones.crearDonacion(req.body);
        if (donacion.result != 'error'){
            return res.status(200).json({
                status: "OK",
                result:  donacion.message,
            });
        } else{
            return res.status(400).json({
                status: "ERROR",
                result: donacion.message,
            });
        }
    } catch(e){
        console.log(e);
    }
}


module.exports = {
    getDonaciones,
    getDonacionesById,
    createDonaciones
}