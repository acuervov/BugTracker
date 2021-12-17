const mongoose = require('mongoose'); 
const {Schema} = mongoose; 

const modeloProyecto = new Schema({
    name:{type: String, required: true},
    description: {type: String, required: false},
    bugList: {type: Array, required: false},
    userList: {type: Array, required: false},
})

module.exports = mongoose.model('proyecto', modeloProyecto); 