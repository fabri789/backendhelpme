const bcrypt = require('bcrypt');
const helpers = {};

helpers.encryptPassword = async (password) =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
};

helpers.matchPassword = async (password, savedPassword)=> {
    try{
        console.log(password, savedPassword)
        return await bcrypt.compare(password, savedPassword);
    }catch(e){
        console.log(e);
    }
}

module.exports = helpers;