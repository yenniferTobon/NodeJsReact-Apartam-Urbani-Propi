const express = require('express'); /*llamando el modulo express*/
const app = express();  /*ejecutando el modulo express que retorna un objecto, app es el servidor*/
/*app.set('port', 3000); definiendo un tipo de variable port=3000
app.get('port')*/
/*__dirname sirve para obtener la ruta absoluta*/
/* el modulo path sirve para contatener rutas path.join(__dirname, 'views/index.html')*/
const router = express.Router();
const propietariosController = require('./controllers/propietariosController');
const urbanizacionesController = require('./controllers/urbanizacionController');
const apartamentosController = require('./controllers/apartamentosController');
const body = require('body-parser');
const mongoose = require('mongoose');   

app.use(body.urlencoded({ /*codificacion completa*/
    extended: true
}));
app.use(body.json());

router.route('/propietarios')
    .get(propietariosController.obtenerPropietarios)
    .post(propietariosController.crearPropietarios);

router.route('/propietarios/:id')
    .delete(propietariosController.eliminarPropietario)
    .get(propietariosController.findPropietario)
    .put(propietariosController.putPropietario);

router.route('/urbanizaciones')
    .get(urbanizacionesController.obtenerUrbanizaciones)
    .post(urbanizacionesController.crearUrbanizaciones);

router.route('/urbanizaciones/:id')
    .delete(urbanizacionesController.eliminarUrbanizacion)
    .get(urbanizacionesController.findUrbanizacion)
    .put(urbanizacionesController.putUrbanizacion);

router.route('/apartamentos')
    .get(apartamentosController.obtenerApartamentos)
    .post(apartamentosController.crearApartamentos);

router.route('/apartamentos/:id')
    .delete(apartamentosController.eliminarApartamento)
    .get(apartamentosController.findApartamento)
    .put(apartamentosController.putApartamento);

app.use('/', router);

mongoose.connect('mongodb://127.0.0.1:27017/myfirstapp', {  /*conexion*/
useNewUrlParser: true,
useUnifiedTopology: true,
useFindAndModify: false}, (error) =>{
    if (error){
        console.log("Hubo un error"+err);
    }
 
});

let db = mongoose.connection;   
db.on('error', console.error.bind(console, 'Db conection error: '));

if(!db){
    console.log('Error during connection with db');
}else{
    console.log('************** Connected seccessfully *********');
}

// listening the server
app.listen(3000, () => {
    console.log('Ya estoy escuchando');
});