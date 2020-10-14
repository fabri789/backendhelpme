const { response } = require("express");
const db = require("../../config/database");


const traerPublicaciones = async() => {
    try{
        const publicaciones = await db.query('SELECT * FROM publicaciones');
        return publicaciones.rows;
    }
    catch(e){
        console.log(e);
    }
}

const traerPublicacionPorId = async(id) => {
    try{
        const publicacion = await db.query('SELECT * FROM publicaciones WHERE id_publicacion = $1', [ id ]);
        return publicacion.rows;

    }
    catch(e){
        console.log(e);
    }
}

const eliminarPublicacionPorId = async (id) =>{
    try{
        const publicacion = await db.query('DELETE FROM publicaciones WHERE id_publicacion = $1', [ id ]);
        return "PUBLICACION ELIMINADA";

    }
    catch(e){
        console.log(e);
    }
}

const crearPublicacion = async (publicacion) =>{
    try{
        console.log(publicacion);
        const { titulo, fecha_publicacion, fecha_finalizada, descripcion, id_organizacion } = publicacion;
        const publicaciones = await db.query('INSERT INTO publicaciones (titulo, fecha_publicacion, fecha_finalizada, descripcion, id_organizacion) VALUES ( $1, $2, $3, $4, $5 )', [titulo, fecha_publicacion, fecha_finalizada, descripcion, id_organizacion]);
        return "PUBLICACION CREADA";
    }
    catch(e){
        console.log(e);
    }
}




module.exports = {
    traerPublicaciones,
    traerPublicacionPorId,
    eliminarPublicacionPorId,
    crearPublicacion
}