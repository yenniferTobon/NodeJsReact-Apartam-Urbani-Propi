const propietarioServicio = require("../service/propietarioService.js");

exports.obtenerPropietario = async (req, res) => { /* export module obtenerPropietarios*/
    try{
        propietarios = await propietarioService.obtenerPropietario(req);  /*let o const*/   
        res.status(200).send(propietarios);
    }catch(err){
        res.status(500).send(err);
    }
};

exports.crearPropietarios = async(req, res) => {
    try{
        let propietario = req.body;
        let addResult = await propietarioServicio.createPropiertario(propietario);
        res.status(200).send(addResult);
    }catch(err){
        res.status(500).send(err);
    }
}; 

exports.eliminarPropietario = async(req, res) => {
    try{
        let idPropietario = req.params.id;
        let deleteResult = await propietarioServicio.eliminarPropietario(idPropietario);

        if (!deleteResult){
            res.status(404).send({
                error: "Propietario no encontrado"});
        }else{
            res.status(200).send(deleteResult);
        }
    }catch (err){
        res.status(500).send(err);
    }
};

exports.findPropietario =  async(req, res) =>{
    try{
        let idPropietario = req.params.id;
        let propietarioResult = await propietarioServicio.findPropietario(idPropietario);
        if (!propietarioResult){
            res.status(404).send({
                error: "Propietario no encontrado"
            });
        }else{
            res.status(200).send(propietarioResult);
        }

    }catch (err){
        res.status(500).send(err);
    }   
};

exports.putPropietario = async(req, res) =>{
    let idPropietario = req.params.id;
    let data = req.body;
    try{
        let result = await propietarioServicio.putPropietario(idPropietario, data, {new:true});
        if(!result){
            res.status(404).send({
                error: "Propietario no encontrado"
            });
        }
        else{
            res.status(200).send(result);
        }
    } catch (err){
        res.status(500).send(err);
    }
};