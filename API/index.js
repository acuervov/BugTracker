const express = require ('express'); 
const { ServerApiVersion } = require('mongodb');
const app = express(); 
const morgan = require('morgan')
const connectDB = require('./database')
const User = require('./Routes/user')
const Proyecto = require('./Routes/proyect');
const Bug = require('./Routes/bug')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

connectDB(); 

//setings
app.set('port', 3001); 
app.use(express.json()); 

//Middlewares
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

//Routes
app.use('/user', User)
app.use('/proyecto', Proyecto)
app.use('/bug', Bug)

//running the server
app.listen(app.get('port'), ()=>{console.log("server running of port", app.get('port'))})
