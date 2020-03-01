const Urbanizacion = require("../models/urbanizacion");

exports.obtenerUrbanizaciones = async () => {
  /* export module obtenerUrbanizaciones*/
  let urbanizaciones = await Urbanizacion.find().populate({
    path: "apartamentos", // modelo a popular
    select: "numero numberOfRoom",
    populate: {
      // modelo 2 a popular
      path: "propietario",
      select: "nombre edad documento"
    }
  });
  return urbanizaciones;
};

exports.crearUrbanizaciones= async(infoUrbanizacion) => {
  let newUrbanizacion = await Urbanizacion.create(infoUrbanizacion);
  return newUrbanizacion;
};

exports.eliminarUrbanizacion = async(idUrbanizacion) => {
  let deleteUrbanizacion = await Urbanizacion.findByIdAndDelete(idUrbanizacion);
  return deleteUrbanizacion;
};

exports.findUrbanizacion =  async(idUrbanizacion) =>{
  let infourbanizacion = await Urbanizacion.findById(idUrbanizacion);
  return infourbanizacion;
};


exports.putUrbanizacion = async(idUrbanizacion, data) =>{
  let updateUrbanizacion = await Urbanizacion.findByIdAndUpdate(idUrbanizacion, data, {new:true});
  return updateUrbanizacion;
}