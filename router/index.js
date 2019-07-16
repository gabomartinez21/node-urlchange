//Este archivo esta siendo creado para especificar las rutas y no tener todo en un solo codigo

const express = require('express')
const router = express.Router();

const urlController = require('../controllers/urlController')

module.exports = () =>{
     router.get('/', urlController.home);
     router.post('/', urlController.agregarUrl)
     // router.get('/nosotros', urlController.nosotros) 

     return router;
}