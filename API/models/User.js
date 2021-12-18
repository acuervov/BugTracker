const mongoose = require('mongoose'); 
const {Schema} = mongoose; 
const { v4: uuidv4 } = require('uuid');


const modeloUsuario = new Schema({
    id: {type: String, required: true},
    name:{type: String, required: true},
    mail:{type: String, required: true}, 
    image: {type: String, required: false},
    proyectos: {type: Array, required: false}
})

module.exports = mongoose.model('user', modeloUsuario); 