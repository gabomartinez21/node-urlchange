

exports.home = (req,res) => {
     res.render('index');
}
exports.agregarUrl = (req,res)=>{
     //Para acceder a los datos que se envien en post se debe utiliar el request.body
     console.log(req.body.urlOriginal)
}
/*
exports.nosotros = (req,res) => {
     res.send('Hola desde nosotros');
}*/