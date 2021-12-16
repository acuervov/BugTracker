const mongoose = require('mongoose')

const URI = 'mongodb+srv://Felipe:123pormi@cluster0.parma.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; 

const connectDB = async()=>{
    await mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); 
}

module.exports = connectDB; 