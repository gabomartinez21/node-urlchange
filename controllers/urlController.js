const Url = require('../models/Url');

exports.home = (req,res) => {
     res.render('index');
}
exports.agregarUrl = async (req,res,next)=>{
     //Para acceder a los datos que se envien en post se debe utiliar el request.body
     // console.log(req.body.urlOriginal);
     let respuesta;
     const url = new Url({urlOriginal:req.body.urlOriginal});

     try{
          let resultado = await url.save();
          respuesta = {
               mensaje:'Almacenado correctamente',
               url:resultado.urlCorta
          };
     }catch(error){
          console.log(error);
          respuesta={
               error:'Hubo un error'
          };
     }
     res.json(respuesta);
     next();
}
/*
exports.nosotros = (req,res) => {
     res.send('Hola desde nosotros');
}*/