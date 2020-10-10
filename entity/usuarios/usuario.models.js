const { response } = require("express");
const db = require("../../config/database");



const traerUsuarios = async() => {
    try {
        const usuarios = await db.query('SELECT * FROM usuarios');
        return usuarios.rows;
    }
    catch(e){
        console.log(e);
    }

}


module.exports = {
    traerUsuarios
}