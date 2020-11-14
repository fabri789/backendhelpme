const jwt = require('jsonwebtoken');
const helpers = require('../../lib/helpers');
const secret = require('../../config/database/dev');
const usuariosModel = require('../usuarios/usuario.models');
const organizacionesModel = require('../organizaciones/organizaciones.models');
const pool = require('../../config/database');

const ingresar = async (req, res) => {
    try{
        const {email, password, tipoCuenta} = req.body;
        if(tipoCuenta == 0){
            const response = await pool.query('Select * from usuarios where email = $1', [email]);
            if(response.rows.length < 1){
                return res.status(400).json({ status: 'Error', message : 'no existe usuario'});
            }
            
            const validPassword = await helpers.matchPassword(password,response.rows[0].contrasenia);
            
            if(!validPassword){
                return res.status(401).json({
                    status : 'ERROR',
                    message : 'Contrasenia incorrecta',
                    token : null,
                    auth : false
                });
            }
            const token = jwt.sign({id : response.rows[0].id_usuario}, secret.SECRET,{
                expiresIn : 60 * 60 * 24
            })
        
            return res.json({status : 'OK', result : 'USUARIO CONECTADO', auth: true, token : token});
        }else{
            const response = await pool.query('Select * from organizaciones where email = $1', [email]);
            if(response.rows.length < 1)
                return res.status(400).json({ status: 'Error', message : 'no existe usuario'});
            
            const validPassword = await helpers.matchPassword(password,response.rows[0].contrasenia);
            
            if(!validPassword){
                return res.status(401).json({
                    status : 'ERROR',
                    message : 'Contrasenia incorrecta',
                    token : null,
                    auth : false
                });
            }
            const token = jwt.sign({id : response.rows[0].id_usuario}, secret.SECRET,{
                expiresIn : 60 * 60 * 24
            })
        
            return res.json({status : 'OK', result : 'ORGANIZACION CONECTADA', auth: true, token : token});

        }
    }catch(e){
        console.log(e);
    }
}

const registrarse = async(req, res) => {
    const { nombre, direccion, cuil, email, pagina_web, telefono, legajo , apellido,  fechaNacimiento, contrasenia, tipoCuenta } = req.body;
    let organizacion = { nombre, direccion, cuil, email, pagina_web, telefono, legajo,contrasenia }
    let usuario = {nombre,apellido, email, fechaNacimiento, contrasenia}

    if(tipoCuenta == 0){
        const pwNueva = await helpers.encryptPassword(contrasenia);
        usuario.contrasenia = pwNueva;
		const response = await usuariosModel.crearUsuario(usuario);

		const token = jwt.sign({id: response.message.insertId}, secret.SECRET, {
			expiresIn : 60 * 60 * 24
        });
        
        res.json({status : 'OK', result : 'USUARIO REGISTRADO', auth: 'true', token : token});
    }else{
        const pwNueva = await helpers.encryptPassword(contrasenia);
        organizacion.contrasenia = pwNueva;
		const response = await organizacionesModel.crearOrganizacion(organizacion);

		const token = jwt.sign({id: response.message.insertId}, secret.SECRET, {
			expiresIn : 60 * 60 * 24
        });
        
        res.json({status : 'OK', result : 'Organizacion Registrada', auth: 'true', token : token});
    }

}

module.exports = {
    ingresar,
    registrarse
}