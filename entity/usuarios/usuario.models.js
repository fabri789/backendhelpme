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

const traerUsuarioPorId = async( id ) => {
    try {
        const usuarios = await db.query('SELECT * FROM usuarios WHERE id_usuario = $1', [ id ] );
        return usuarios.rows;
    }
    catch(error) {
        console.log(error);
    }
}

const eliminarUsuarioPorId = async( id ) => {
    try {
        const usuarios = await db.query('DELETE FROM usuarios WHERE id_usuario = $1', [ id ] );
        return "USUARIO ELIMINADO"
    }
    catch(error) {
        console.log(error);
    }
}

const crearUsuario = async( usuario ) => {
    try {
        console.log(usuario);
        const { nombre, apellido, mail, fechaNacimiento, contrasenia } = usuario;
        const usuarios = await db.query('INSERT INTO usuarios( nombre, apellido, email, fecha_nacimiento, contrasenia ) values ( $1, $2, $3, $4, $5 )', [ nombre, apellido, mail, fechaNacimiento, contrasenia ] );
        return "USUARIO CREADO"
    }
    catch(error) {
        console.log(error);
    }
}




module.exports = {
    traerUsuarios,
    traerUsuarioPorId,
    eliminarUsuarioPorId,
    crearUsuario
}