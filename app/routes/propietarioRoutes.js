const controller = require('../controllers/propietarioController.js');

module.exports = (router) =>{
    router.route('/propietarios').get(controller.obtenerPropietario);
    router.route('/propietarios').post(controller.crearPropietario);
    router.route('/propietarios/:id').delete(controller.eliminarPropietario);   
    router.route('/propietarios/:id').get(controller.findPropietario);
    router.route('/propietarios/:id').put(controller.putPropietario)
};