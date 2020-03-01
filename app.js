const express = require('express'); //modulo express frameword para crear el servidor
const app = express(); //instanciamos el servidor y se guarda en app
const bodyParser = require('body-parser');
const config = require('./app/configs/config'); //carga las variables env
const router = express.Router(); // como se van a comprotar las urls
const routes = require('./app/routes/index'); //importand index.js
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json()); //parsear las peticiones
routes(router);
app.use('/api', router);

mongoose.connect('mongodb://'+config.IP_DB+':'+config.PORT_DB+'/'+config.NAME_DB, {  /*conexion*/
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

app.listen(config.PORT, () => {
    console.log(`Escuchando en el puerto ${config.PORT}`); //` este simbolo me permite colocar codigo jsvascript    
});




