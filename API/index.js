const express = require ('express'); 
const app = express(); 
const morgan = require('morgan')
const connectDB = require('./database')

connectDB(); 

//setings
app.set('port', 3001); 
app.use(express.json()); 

//Middlewares
app.use(morgan('dev'))

//Routes

//running the server
app.listen(app.get('port'), ()=>{console.log("server running of port", app.get('port'))})
