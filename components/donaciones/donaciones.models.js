const db = require("../../config/database");

const traerDonaciones = async () => {
    try{
        const donaciones = db.query('Select * from donaciones');
        return {
            result : 'OK',
            message: donaciones.rows
        }
    }catch(e){
        return {
            result : 'error',
            message: 'Error en traerDonaciones'
        }
    }
}

const traerDonacionesPorId = async (id) => {
    try{
        const donaciones = db.query('Select * from donaciones where id_donacion = $1', [id]);
        return {
            result : 'OK',
            message: donaciones.rows
        }
    }catch(e){
        return {
            result : 'error',
            message: 'Error en traerDonacionesPorId'
        }
    }
}

const crearDonacion = async (donacion) => {
    try{
        console.log(donacion);
        const { id_publicacion, id_usuario, metodo_pago, fecha_donacion, monto } = donacion;
        const donaciones = await db.query('INSERT INTO donaciones( id_publicacion, id_usuario, metodo_pago, fecha_donacion, monto ) values ( $1, $2, $3, $4, $5)', [id_publicacion, id_usuario, metodo_pago, fecha_donacion, monto]);
        return {
            result : 'OK',
            message : donaciones
        }
    } catch(e){
        return {
            result : 'error',
            message : 'error en crearDonacion'
        }
    }
}



module.exports = {
    traerDonaciones,
    traerDonacionesPorId,
    crearDonacion
}