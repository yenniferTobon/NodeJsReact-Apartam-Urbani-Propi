const mongoose = require('mongoose');

let urbanizacionScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    numberOfBuildings: {
        type: Number,
        required: true
    },
    numberOfParking: {
        type: String,
        required: true
    },
    hasApool: {
        type: String,
        required: true,
    },
    greenAreas:{
        type: String,
        required: false
    }
    /**apartamentos:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Apartamento'
        }
    ]**/
});

mongoose.model('Urbanizacion', urbanizacionScheme);
module.exports = mongoose.model('Urbanizacion');
