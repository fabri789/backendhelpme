const { response } = require("express");
const db = require("../../config/database");



const traerUsuarios = async() => {
    try {
        const usuarios = await db.query('SELECT * FROM usuarios');
        return { 
            result : 'OK',
            message: usuarios.rows 
        };
    }
    catch(e){
        return {
            result : 'error',
            message : 'Error en traerUsuarios'
        }
    }

}

const traerUsuarioPorId = async( id ) => {
    try {
        const usuarios = await db.query('SELECT * FROM usuarios WHERE id_usuario = $1', [ id ] );
        return {
            result : 'OK',
            message: usuarios.rows 
        };
    }
    catch(e){
        return {
            result : 'error',
            message : 'Error en traerUsuarioPorId'
        }
    }
}

const eliminarUsuarioPorId = async( id ) => {
    try {
        const usuarios = await db.query('DELETE FROM usuarios WHERE id_usuario = $1', [ id ] );
        return {
            result : 'OK',
            message: 'Usuario Eliminado'
        }
    }
    catch(error) {
        return {
            result : 'error',
            message: 'error en elimnar Usuario por ID'
        }
    }
}

const crearUsuario = async( usuario ) => {
    try {
        console.log(usuario);
        const { nombre, apellido, email, fechaNacimiento, contrasenia } = usuario;
        const usuarios = await db.query('INSERT INTO usuarios( nombre, apellido, email, fecha_nacimiento, contrasenia ) values ( $1, $2, $3, $4, $5 )', [ nombre, apellido, email, fechaNacimiento, contrasenia ] );
        return {
            result : 'OK',
            message: usuarios
        }
    }
    catch(error) {
        console.log(error);
        return {
            result : 'error',
            message: 'error en crearUsuario'
        }
    }
}

const editarUsuario = async( usuario ) => {
    try {
        console.log(usuario);
        const { nombre, apellido, email, fecha_nacimiento, contrasenia, id_usuario } = usuario;
        const usuarios = await db.query( 'UPDATE usuarios SET nombre = $1, apellido= $2, email = $3, fecha_nacimiento = $4, contrasenia = $5 WHERE id_usuario = $6', [ nombre, apellido, email, fecha_nacimiento, contrasenia, id_usuario ] );
        return {
            result : 'OK',
            message: 'usuario actualizado'
        }
    }
    catch(error) {
        console.log(error);
        return {
            result : 'error',
            message: 'error en editarUsuario'
        }
    }
}


module.exports = {
    traerUsuarios,
    traerUsuarioPorId,
    eliminarUsuarioPorId,
    crearUsuario,
    editarUsuario
}