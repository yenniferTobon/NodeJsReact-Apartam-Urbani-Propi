const mongoose = require('mongoose');

let apartamentoScheme = new mongoose.Schema({
    numero:{
        type: String,
        required: true
    },
    numberOfRoom: {
        type: Number,
        required: true
    },
    piso: {
        type: String,
        required: true
    },
    urbanizacion:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Urbanizacion'
    },
    propietario:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Propietario'
    }
});

mongoose.model('Apartamento', apartamentoScheme);
module.exports = mongoose.model('Apartamento');
