const usuarios = require("../entity/usuarios/usuario.models");

const getUsuarios = async(req, res) =>{
    try {const listaUsuarios = await usuarios.traerUsuarios();
    res.status(200).json({
        status : "OK",
        result : listaUsuarios,
    })
    }
    catch(e) {
        console.log(e);
    }
}


module.exports = {
    getUsuarios
}