const mongoose = require("mongoose")
const schema = mongoose.Schema;

const UsuarioSchema = schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("usuario_collection", UsuarioSchema);