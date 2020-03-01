const Propietario = require("../models/propietario");

exports.obtenerPropietario = async (req) => { /* export module obtenerPropietarios*/
    propietarios = await Propietario.findOne({documento: req.query.documento});  /*let o const*/   
    return propietarios;
};

exports.crearPropietarios = async(propietario) => {
   let newPropietario = await Propietario.create(propietario);
   return newPropietario; 
};

exports.eliminarPropietario = async(idPropietario) => {
    let deleteResult = await Propietario.findByIdAndDelete(idPropietario);
};

exports.findPropietario =  async(idPropietario) =>{
    let propietario = await Propietario.findById(idPropietario);  
    return propietario; 
};

exports.putPropietario = async(idPropietario, data,) =>{
    let result = await Propietario.findByIdAndUpdate(idPropietario, data, {new:true});
};
