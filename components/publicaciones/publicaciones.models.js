const { response } = require("express");
const db = require("../../config/database");


const traerPublicaciones = async() => {
    try{
        const publicaciones = await db.query('SELECT * FROM publicaciones');
        return {
            result : 'OK',
            message : publicaciones.rows
        }
    }
    catch(e){
        return {
            result : 'error',
            message : 'error en traerPublicaciones'
        }
    }
}

const traerPublicacionPorId = async(id) => {
    try{
        const publicacion = await db.query('SELECT * FROM publicaciones WHERE id_publicacion = $1', [ id ]);
        return {
            result : 'OK',
            message : publicacion.rows
        }

    }
    catch(e){
        return {
            result : 'error',
            message : 'error en traerPublicacionPorId'
        }
    }
}

const eliminarPublicacionPorId = async (id) =>{
    try{
        const publicacion = await db.query('DELETE FROM publicaciones WHERE id_publicacion = $1', [ id ]);
        return {
            result : 'OK',
            message : 'publicacion Eliminada'
        }
    }
    catch(e){
        return {
            result : 'error',
            message : 'error en eliminarPublicacionPorId'
        }
    }
}

const crearPublicacion = async (publicacion) =>{
    try{
        console.log(publicacion);
        const { titulo, fecha_publicacion, fecha_finalizada, descripcion, id_organizacion, imagenes } = publicacion;
        //imagenes = [ur1, url2, url3]
        const publicaciones = await db.query('INSERT INTO publicaciones (titulo, fecha_publicacion, fecha_finalizada, descripcion, id_organizacion) VALUES ( $1, $2, $3, $4, $5 )', [titulo, fecha_publicacion, fecha_finalizada, descripcion, id_organizacion]);
        
        for(i = 0; i < imagenes.length; i++){
            await db.query('Insert into imagenes(url_imagen, id_publicacion) values ($1, $2)', [imagenes[i], publicaciones.insertId]);
        }
        return {
            result : 'OK',
            message : 'publicacion creada'
        }
    }
    catch(e){
        return {
            result : 'error',
            message : 'error en crearPublicacion'
        }
    }
}




module.exports = {
    traerPublicaciones,
    traerPublicacionPorId,
    eliminarPublicacionPorId,
    crearPublicacion
}