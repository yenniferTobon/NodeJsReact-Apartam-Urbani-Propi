const controller = require('../controllers/apartamentoController.js');

module.exports = (router) =>{
    router.route('/apartamentos/:idUrb/:idApart').get(controller.obtenerApartamentos);
    router.route('/apartamentos').post(controller.crearApartamentos);
    //router.route('/apartamentos/:id').delete(controller.eliminarApartamento);   
    //router.route('/apartamentos/:id').get(controller.findApartamento);
    //router.route('/apartamentos/:id').put(controller.putApartamento);
};