const express = require('express');
//Este path nos traera la ruta de donde esta la carpeta
const path = require('path');
const routes = require('./router')
const bodyParser = require('body-parser');
const app = express();


//Habilitar el body-parser para leer los datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:true}))

// /Habilitar pug
app.set('view engine', 'pug');
//Carpeta para las vistas
app.set('views',path.join(__dirname,'./views'))

//Cargar los archivos estaticos
app.use(express.static('./public'))

//Definir las rutas de la aplicación
app.use('/', routes())





/*
app.get('/',(req,res)=>{
     //send te permite enviar la informacion
     // res.send('Hola Mundo')
     //json enviara la informaci[on en formato json
     const respuesta = {
          objetivo:'enviando al json'
     }
     // res.json(respuesta)
     //Y render te permite enviar la infromación en modo html
     // res.render()
})
*/
app.listen(3000)