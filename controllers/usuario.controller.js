const usuarios = require("../entity/usuarios/usuario.models");

const getUsuarios = async(req, res) => {
    try {const listaUsuarios = await usuarios.traerUsuarios();
    res.status(200).json({
        status : "OK",
        result : listaUsuarios,
    })
    }
    catch( error ) {
        console.log( error );
    }
}

const getUsuariosById = async ( req, res ) => {
    try {
        const id = req.params.id; // almacenamos en id, el parametro de la ruta 
        const usuario = await usuarios.traerUsuarioPorId( id );
        res.status( 200 ).json( {
            status : "OK",
            result: usuario
        })
    }
    catch ( error ) {
        console.log( error );
    }
}

const deleteUsuarioById = async ( req, res ) => {
    try {
        const id = req.params.id; // almacenamos en id, el parametro de la ruta 
        const usuario = await usuarios.eliminarUsuarioPorId( id );
        res.status( 200 ).json( {
            status : "OK",
            result: usuario
        })
    }
    catch ( error ) {
        console.log( error );
    }
}

const createUsuario = async ( req, res ) => {
    try {
        const nuevoUsuario = req.body; // almacenamos en id, el parametro de la ruta 
        const usuario = await usuarios.crearUsuario( nuevoUsuario );
        res.status( 200 ).json( {
            status : "OK",
            result: usuario
        })
    }
    catch ( error ) {
        console.log( error );
    }
}

const updateUsuario = async ( req, res ) => {
    try {
        const usuarioEditado = req.body;
        const usuario = await usuarios.editarUsuario( usuarioEditado );
        res.status( 200 ).json( {
            status : "OK",
            result: usuario
        })
    }
    catch ( error ) {
        console.log( error );
    }
}




module.exports = {
    getUsuarios,
    getUsuariosById,
    deleteUsuarioById,
    createUsuario,
    updateUsuario
}