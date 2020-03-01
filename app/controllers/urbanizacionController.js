const urbanizacionServicio = require("../service/urbanizacionService.js");

exports.obtenerUrbanizaciones = async (req, res) => { /* export module obtenerUrbanizaciones*/
    try{
        let urbanizaciones = await urbanizacionServicio.obtenerUrbanizaciones();
        res.status(200).send(urbanizaciones);
    }catch(err){
        res.status(500).send(err);
    }
}    

exports.crearUrbanizaciones = async (req, res) => { /* export module obtenerUrbanizaciones*/
    try{
            let infoUrbanizacion = req.body;
            let addUrbanizacion = await urbanizacionServicio.crearUrbanizaciones(infoUrbanizacion);
            res.status(200).send(addUrbanizacion);
        }catch(err){
            res.status(500).send(err);
        }
} 


exports.eliminarUrbanizacion = async(req, res) => {
    try{
        let idUrbanizacion = req.params.id;
        let deleteResult = await urbanizacionServicio.eliminarUrbanizacion(idUrbanizacion);

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
        let urbanizacionResult = await urbanizacionServicio.findUrbanizacion(idUrbanizacion);
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
};


exports.putUrbanizacion = async(req, res) =>{
    let idUrbanizacion = req.params.id;
    let data = req.body;
    try{
        let result = await urbanizacionServicio.putUrbanizacion(idUrbanizacion, data, {new:true});
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