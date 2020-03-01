const Apartamento = require("../models/apartamento");

exports.obtenerApartamentos = async (req, res) => { /* export module obtenerUrbanizaciones*/
    let apartamento = await Apartamento.find().obtenerApartamentos('urbanizacion', 'name numberOfBuildings').populate('propietario', 'nombre edad documento sexo'); 
    return apartamento;
}; 

exports.crearApartamentos= async(apartamento, Idurbanizacion, Idpropietario) => {
    let addResult = await Apartamento.create(apartamento);
    let urbanizacion = await Urbanizacion.findById(Idurbanizacion);
    urbanizacion.apartamentos.push(addResult);
    urbanizacion.save();
    let propietario = await Propietario.findById(Idpropietario);
    propietario.apartamentos.push(addResult);
    propietario.save();
}; 

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
};**/