const Apartamento = require('../models/apartamento');

exports.obtenerApartamentos = async (req, res) => { /* export module obtenerUrbanizaciones*/
    try{
        let apartamento = await apartamentoServicio.obtenerApartamentos('urbanizacion', 'name numberOfBuildings').populate('propietario', 'nombre edad documento sexo'); 
        res.status(200).send(apartamento);
    }catch(err){
        res.status(500).send(err);
    }
};


exports.crearApartamentos= async(req, res) => {
    try{
        let apartamento = req.body;
        let addResult = await apartamentoServicio.crearApartamentos(apartamento, req.body.urbanizacion, req.body.propietario);
        res.status(200).send(addResult);
    }catch(err){
        res.status(500).send(err);
    }
} 

/**exports.eliminarApartamento = async(req, res) => {
    try{
        let idApartamento = req.params.id;
        let deleteResult = await Propietario.findByIdAndDelete(idApartamento);

        if (!deleteResult){
            res.status(404).send({
                error: "Apartamento no encontrado"});
        }else{
            res.status(200).send(deleteResult);
        }
    }catch (err){
        res.status(500).send(err);
    }
}

exports.findApartamento =  async(req, res) =>{
    try{
        let idApartamento = req.params.id;
        let apartamentoResult = await Propietario.findById(idApartamento);
        if (!apartamentoResult){
            res.status(404).send({
                error: "Apartamento no encontrado"
            });
        }else{
            res.status(200).send(propietarioResult);
        }

    }catch (err){
        res.status(500).send(err);
    }   
}

exports.putApartamento = async(req, res) =>{
    let idApartamento = req.params.id;
    let data = req.body;
    try{
        let result = await Propietario.findByIdAndUpdate(idApartamento, data, {new:true});
        if(!result){
            res.status(404).send({
                error: "Apartamento no encontrado"
            });
        }
        else{
            res.status(200).send(result);
        }
    } catch (err){
        res.status(500).send(err);
    }
}**/