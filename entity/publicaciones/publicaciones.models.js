const { response } = require("express");
const db = require("../../config/database");


const traerPublicaciones = async() => {
    try{
        const publicaciones = await db.query('SELECT * FROM publicaciones');
        return publicaciones.rows;
    }
    catch(e){
        console.log(e)
    }
}



module.exports = {
    traerPublicaciones
}