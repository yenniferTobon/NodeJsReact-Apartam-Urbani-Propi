const authentication = require('./authentication'); //funcion 
const urbanizacion = require('./urbanizacionRoutes');
const apartamento = require('./apartamentoRoutes');
module.exports = (router) => {   // se exporta para poder utilizarlos en otros archivos
    authentication(router);
    urbanizacion(router);
    apartamento(router);
}

