const controller = require('../controllers/urbanizacionController.js');

module.exports = (router) =>{
    router.route('/urbanizaciones').get(controller.obtenerUrbanizaciones);
    router.route('/urbanizaciones').post(controller.crearUrbanizaciones);
    router.route('/urbanizaciones/:id').delete(controller.eliminarUrbanizacion);   //porq controler??
    router.route('/urbanizaciones/:id').get(controller.findUrbanizacion);
    router.route('/urbanizaciones/:id').put(controller.putUrbanizacion);
};


