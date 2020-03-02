const Urbanizacion = require('../models/urbanizacion');

exports.obtenerUrbanizaciones = async (req, res) => { /* export module obtenerUrbanizaciones*/
    try{
        let urbanizaciones = await Urbanizacion.find().populate({ 
            path: "apartamentos", // modelo a popular
            select: "numero numberOfRoom",
            populate: {  // modelo 2 a popular
                path: "propietario",
                select: "nombre edad documento"
            }
        }); 
        res.status(200).send(urbanizaciones);
    }catch(err){
        res.status(500).send(err);
    }

}    

exports.crearUrbanizaciones= async(req, res) => {
    try{
        let urbanizacion = req.body;

        let addResult = await Urbanizacion.create(urbanizacion);
        res.status(200).send(addResult);
    }catch(err){
        res.status(500).send(err);
    }
} 

exports.eliminarUrbanizacion = async(req, res) => {
    try{
        let idUrbanizacion = req.params.id;
        let deleteResult = await Urbanizacion.findByIdAndDelete(idUrbanizacion);

        if (!deleteResult){
            res.status(404).send({
                error: "Propietario no encontrado"});
        }else{
            res.status(200).send(deleteResult);
        }
    }catch (err){
        res.status(500).send(err);
    }
}

exports.findUrbanizacion =  async(req, res) =>{
    try{
        let idUrbanizacion = req.params.id;
        let urbanizacionResult = await Urbanizacion.findById(idUrbanizacion);
        if (!urbanizacionResult){
            res.status(404).send({
                error: "Urbanizacion no encontrado"
            });
        }else{
            res.status(200).send(urbanizacionResult);
        }

    }catch (err){
        res.status(500).send(err);
    }   
}

exports.putUrbanizacion = async(req, res) =>{
    let idUrbanizacion = req.params.id;
    let data = req.body;
    try{
        let result = await Urbanizacion.findByIdAndUpdate(idUrbanizacion, data, {new:true});
        if(!result){
            res.status(404).send({
                error: "Urbanizacion no encontrado"
            });
        }
        else{
            res.status(200).send(result);
        }
    } catch (err){
        res.status(500).send(err);
    }
}



/**exports.obtenerUrbanizacion = (req, res) => {
    var urbanizacion = {
        "Nombre" : "Colonia",
        "numberOfBuildings" : 10,
        "numberOfParking" : 9,
        "hasApool" : "si",
        "greenAreas" : "si"
    };

    res.send(urbanizacion);

}

exports.crearUrbanizacion= (req, res) => {
    var urbanizacion = req.body;
    console.log(urbanizacion);
    var result = {};
    result.status = 200;
    result.message = "creado con exito";
    res.status(200).send(result);
}**/