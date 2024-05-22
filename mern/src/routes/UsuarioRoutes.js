const express = require('express');
const usuarioController = require('../controllers/UsuariosConstrollers');

const api = express.Router();

api.post('/usuarios/registrar', usuarioController.registrarUsuario);
api.get('/usuarios/listar', usuarioController.ListarUsuarios);
api.delete('/usuarios/eliminar/:id', usuarioController.EliminarUsuario);
api.get('/usuarios/buscar/:email', usuarioController.BuscarByEmailUsuario);

module.exports = api;