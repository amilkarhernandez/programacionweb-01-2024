const { Response } = require("../utils/Response");
const UsuarioModel = require("../models//Usuario");
const usuarioRepository = require('../repository/UsuarioRepository')

async function registrarUsuario(req, res) {
    const { name, email, telephone, password } = req.body;

    const usuario = new UsuarioModel();
    try {
        usuario.name = name;
        usuario.email = email;
        usuario.telephone = telephone;
        usuario.password = password;

        const result = await usuarioRepository.createUsuario(usuario);
        Response.status = 201;
        Response.message = "Guardado Correctamente"
        Response.result = result;

        res.status(201).send(
            Response
        );

    } catch (error) {
        console.log("Error:", error)
        Response.status = 500;
        Response.message = "Ocurrio un error"
        Response.result = error;

        res.status(500).send(
            Response
        );
    }

}

async function ListarUsuarios(req, res) {
    try {
        const result = await usuarioRepository.ListAllUsuario();
        Response.status = 200;
        Response.message = "Listado Correctamente"
        Response.result = result;

        res.status(200).send(
            Response
        );
    } catch (error) {
        console.log("Error:", error)
        Response.status = 500;
        Response.message = "Ocurrio un error"
        Response.result = error;

        res.status(500).send(
            Response
        );
    }
}

async function EliminarUsuario(req, res) {
    const id = req.params['id'];
    try {
        await usuarioRepository.deleteById(id);
        Response.status = 200;
        Response.message = "Borrado Correctamente"

        res.status(200).send(
            Response
        );
    } catch (error) {
        console.log("Error:", error)
        Response.status = 500;
        Response.message = "Ocurrio un error"
        Response.result = error;

        res.status(500).send(
            Response
        );
    }
}

async function BuscarByEmailUsuario(req, res) {
    const email = req.params['email'];
    try {
        const result = await usuarioRepository.FindByEmailUsuario(email);
        if (result) {
            Response.status = 200;
            Response.message = "Encontrado Correctamente"
            Response.result = result;
        } else {
            Response.status = 404;
            Response.message = "Usuario No Encontrado"
        }

        res.status(Response.status).send(
            Response
        );
    } catch (error) {
        console.log("Error:", error)
        Response.status = 500;
        Response.message = "Ocurrio un error"
        Response.result = error;

        res.status(500).send(
            Response
        );
    }
}

module.exports = {
    registrarUsuario,
    ListarUsuarios,
    EliminarUsuario,
    BuscarByEmailUsuario
}