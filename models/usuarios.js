var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuariosSchema = Schema(
    {
        mail:{type: String, require:true, unique:true},
        pas:{type: String, require:true}
    }
);

module.exports = mongoose.model('usuarios', UsuariosSchema);
