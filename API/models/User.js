const mongoose = require('mongoose'); 
const {Schema} = mongoose; 

const modeloUsuario = new Schema({
    id: {type: Number, require: true},
    name:{type: String, required: true},
    mail:{type: String, required: true}, 
    image: {type: String, required: false}
})

module.exports = mongoose.model('user', modeloUsuario); 