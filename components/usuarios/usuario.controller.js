const usuarios = require("../usuarios/usuario.models");

const getUsuarios = async(req, res) => {
    try {
        const listaUsuarios = await usuarios.traerUsuarios();
        if(listaUsuarios.result != 'error'){
            return res.status(200).json({
                status : "OK",  
                result : listaUsuarios.message,
            });
        }else{
            return res.status(400).json({
                status : "ERROR",  
                result : listaUsuarios.message,
            }); 
        }
    }
    catch( error ) {
        return res.status(400).json({
            status : "Error",
            message : "Error getUsuarios"
        });
    }
}

const getUsuariosById = async ( req, res ) => {
    try {
        const id = req.params.id; // almacenamos en id, el parametro de la ruta 
        const usuario = await usuarios.traerUsuarioPorId( id );
        if(usuario.result != 'error'){
            return res.status(200).json({
                status : "OK",  
                result : usuario.message,
            });
        }else{
            return res.status(400).json({
                status : "ERROR",  
                result : usuario.message,
            }); 
        }
    }
    catch ( error ) {
        console.log( error );
    }
}

const deleteUsuarioById = async ( req, res ) => {
    try {
        const id = req.params.id; // almacenamos en id, el parametro de la ruta 
        const usuario = await usuarios.eliminarUsuarioPorId( id );
        if(usuario.result != 'error'){
            return res.status(200).json({
                status : "OK",  
                result : usuario.message,
            });
        }else{
            return res.status(400).json({
                status : "ERROR",  
                result : usuario.message,
            }); 
        }
    }
    catch ( error ) {
        console.log( error );
    }
}

const createUsuario = async ( req, res ) => {
    try {
        const nuevoUsuario = req.body; // almacenamos en id, el parametro de la ruta 
        const usuario = await usuarios.crearUsuario( nuevoUsuario );
        if(usuario.result != 'error'){
            return res.status(200).json({
                status : "OK",  
                result : usuario.message,
            });
        }else{
            return res.status(400).json({
                status : "ERROR",  
                result : usuario.message,
            }); 
        }
    }
    catch ( error ) {
        console.log( error );
        return res.status(400).json({
            status : "ERROR",  
            result : 'error en createUsuario',
        }); 
    }
}

const updateUsuario = async ( req, res ) => {
    try {
        const usuarioEditado = req.body;
        const usuario = await usuarios.editarUsuario( usuarioEditado );
        if(usuario.result != 'error'){
            return res.status(200).json({
                status : "OK",  
                result : usuario.message,
            });
        }else{
            return res.status(400).json({
                status : "ERROR",  
                result : usuario.message,
            }); 
        }
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