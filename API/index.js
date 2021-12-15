const express = require ('express'); 
const app = express(); 

//setings
app.set('port', 3001); 
//Middlewares

//Routes

//running the server
app.listen(app.get('port'), ()=>{console.log("server running of port", app.get('port'))})
