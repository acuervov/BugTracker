const {Router} = require('express');
const router = Router();
const bug = require('../models/Bug'); 


router.post('/', (req, res)=> { // crea nuevo bug
const nuevoBug = new bug(req.body)
nuevoBug.save()
.then(response=> res.send(response))
.catch(err=>res.send(err))
})

router.get('/:id', (req,res)=> { // muestra bug buscado por id params
    const id = req.params.id; 
    bug.find({proyecto: id})
    .then(response => res.json(response))
})
  
router.put('/:id', (req,res)=>{ // modifica bug existente, hay que enviarle una copia de los datos del bug que incluya los cambios por body
    const id = req.params.id; 
    bug.updateOne({_id: id}, req.body)
    .then(response => response.save())
    .then(response => res.json(response))
    .catch(err => res.send(err))
})

router.get('/encargado-:encargado/status-:status', async (req, res)=> {
   var resultado = await bug.find(); 
   const encargado = req.params.encargado; 
   const status = req.params.status; 
   console.log(resultado)

       if(encargado !== 'null'){resultado = resultado.filter(bug => {return bug.userList.includes(encargado)})}
       if(status !== 'null'){resultado = resultado.filter(bug => {return bug.status === status})}
       res.json(resultado)
})


module.exports = router; 