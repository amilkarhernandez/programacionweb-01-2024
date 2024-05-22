const UsuarioModel = require("../models/Usuario");

module.exports.createUsuario = async (usuario) => {
    try {
        return await usuario.save();
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

module.exports.ListAllUsuario = async () => {
    try {
        return await UsuarioModel.find();
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

module.exports.FindByEmailUsuario = async (email) => {
    try {
        return await UsuarioModel.findOne({ email: email });
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

module.exports.deleteById = async (id) => {
    try {
        return await UsuarioModel.findByIdAndDelete({ _id: id });
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};

module.exports.updateUsuario = async (id, usuario) => {
    try {
        return await UsuarioModel.findByIdAndUpdate({ _id: id }, { name: usuario.name, telephone: usuario.telephone });
    } catch (err) {
        throw new Error('Error al guardar los datos en la base de datos');
    }
};