const mongoose = require('mongoose'); 
const {Schema} = mongoose; 

const modeloBug = new Schema({
    name:{type: String, required: true},
    description: {type: String, required: true},
    route: {type: String, required: false},
    severity: {type: String, required: true},
    date: {type: Date, require: false}, 
    userList: {type: Array, required: false},
    status: {type: String, required: true}
})

module.exports = mongoose.model('bug', modeloBug); 