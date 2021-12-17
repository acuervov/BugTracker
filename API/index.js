const express = require ('express'); 
const { ServerApiVersion } = require('mongodb');
const app = express(); 
const morgan = require('morgan')
const connectDB = require('./database')
const User = require('./Routes/user')
const Proyecto = require('./Routes/proyect');
const Bug = require('./Routes/bug')

connectDB(); 

//setings
app.set('port', 3001); 
app.use(express.json()); 

//Middlewares
app.use(morgan('dev'))

//Routes
app.use('/user', User)
app.use('/proyecto', Proyecto)
app.use('/bug', Bug)

//running the server
app.listen(app.get('port'), ()=>{console.log("server running of port", app.get('port'))})
