const { response } = require("express");
const db = require("../../config/database");

const traerOrganizaciones = async() => {
    try {
        const organizaciones = await db.query('SELECT * FROM organizaciones');
        return {
            message: organizaciones.rows
        };
    }
    catch(e){
        return {
            message: 'Error en traerOrganizaciones'
        }
    }
}

const traerOrganizacionPorId = async (id) => {
    try{
        const organizaciones = await db.query('SELECT * FROM organizaciones WHERE id_organizacion = $1', [id]);
        return {
            message: organizaciones.rows
        };
    }
    catch(e){
        return {
            message: 'Error en traerOrganizacionPorId'
        }
    }
}

const eliminarOrganizacionPorId = async (id) => {
    try {
        const organizaciones = await db.query('DELETE FROM organizaciones WHERE id_organizacion = $1', [id]);
        return "Organizacion eliminada"
    }
    catch (e){
        console.log(e);
    }
}

const crearOrganizacion = async (organizacion) => {
    try{
        console.log(organizacion);
        const { nombre, direccion, cuil, email, pagina_web, telefono, legajo } = organizacion;
        const organizaciones = await db.query('INSERT INTO organizaciones( nombre, direccion, cuil, email, pagina_web, telefono, legajo ) values ( $1, $2, $3, $4, $5, $6, $7)', [nombre, direccion, cuil, email, pagina_web, telefono, legajo]);
        return "Organizacion creada"
    } catch(e){
        console.log(e);
    }
}

const editarOrganizacion = async (organizacion) => {
    try {
        console.log(organizacion);
        const { nombre, direccion, cuil, email, pagina_web, telefono, legajo } = organizacion;
        const organizaciones = await db.query('UPDATE organizaciones SET nombre = $1, direccion = $2, cuil = $3, email = $4, pagina_web = $5, telefono = $6, legajo = $7 WHERE id_organizacion = $7', [ nombre, direccion, cuil, email, pagina_web, telefono, legajo, id_organizacion]);
        return "Organizacion editada"
    }
    catch(e){
        console.log(e);
    }
}

module.exports = {
    traerOrganizaciones,
    traerOrganizacionPorId,
    eliminarOrganizacionPorId,
    crearOrganizacion,
    editarOrganizacion
}