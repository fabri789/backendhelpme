const db = require("../../config/database");

const traerOrganizaciones = async() => {
    try {
        const organizaciones = await db.query('SELECT * FROM organizaciones');
        return {
            result : 'OK',
            message: organizaciones.rows
        };
    }
    catch(e){
        return {
            result : 'error',
            message: 'Error en traerOrganizaciones'
        }
    }
}

const traerOrganizacionPorId = async (id) => {
    try{
        const organizaciones = await db.query('SELECT * FROM organizaciones WHERE id_organizacion = $1', [id]);
        return {
            result : 'OK',
            message: organizaciones.rows
        };
    }
    catch(e){
        return {
            result : 'error',
            message: 'Error en traerOrganizacionPorId'
        }
    }
}

const eliminarOrganizacionPorId = async (id) => {
    try {
        const organizaciones = await db.query('DELETE FROM organizaciones WHERE id_organizacion = $1', [id]);
        return {
            result : 'ok',
            message : 'Organizacion eliminada'
        }
    }
    catch (e){
        return {
            result : 'error',
            message : 'error en eliminarOrganizacionPorId'
        }
    }
}

const crearOrganizacion = async (organizacion) => {
    try{
        console.log(organizacion);
        const { nombre, direccion, cuil, email, pagina_web, telefono, legajo, contrasenia } = organizacion;
        const organizaciones = await db.query('INSERT INTO organizaciones( nombre, direccion, cuil, email, pagina_web, telefono, legajo, contrasenia ) values ( $1, $2, $3, $4, $5, $6, $7,$8)', [nombre, direccion, cuil, email, pagina_web, telefono, legajo, contrasenia]);
        return {
            result : 'ok',
            message : organizaciones
        }
    } catch(e){
        return {
            result : 'error',
            message : 'error en crear organizacion'
        }
    }
}

const editarOrganizacion = async (organizacion) => {
    try {
        console.log(organizacion);
        const { nombre, direccion, cuil, email, pagina_web, telefono, legajo, contrasenia, id_organizacion } = organizacion;
        const organizaciones = await db.query('UPDATE organizaciones SET nombre = $1, direccion = $2, cuil = $3, email = $4, pagina_web = $5, telefono = $6, legajo = $7, contrasenia = $8  WHERE id_organizacion = $9', [ nombre, direccion, cuil, email, pagina_web, telefono, legajo, contrasenia, id_organizacion]);
        return {
            result : 'ok',
            message : 'Organizacion actualizada'
        }
    }
    catch(e){
        return {
            result : 'error',
            message : 'error en editarOrganizacion'
        }
    }
}

module.exports = {
    traerOrganizaciones,
    traerOrganizacionPorId,
    eliminarOrganizacionPorId,
    crearOrganizacion,
    editarOrganizacion
}