const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const shortId = require('shortid');

const urlSchema = new Schema({
    urlOriginal:{
        type:String,
        lowercase:true,
        trim:true
    },
    urlCorta:{
        type:String
    }
});

//Metodos mongoose
urlSchema.pre('save',async function(next){
    //generar la urla corta
    this.urlCorta = shortId.generate();
    //Este next es el middlewere que hace que pase a la siguiente linea de ejecución que en este caso sería guardar todo en la db
    next()
})


module.exports = mongoose.model('Urls', urlSchema);