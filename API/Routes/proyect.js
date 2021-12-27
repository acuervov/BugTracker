const {Router} = require('express');
const router = Router();
const proyecto = require('../models/Proyect'); 

 
router.post('/', (req, res)=> { // crea nuevo proyecto
const nuevoProyecto = new proyecto(req.body)
nuevoProyecto.save()
.then(response=> res.json(response))
.catch(err=>res.send(err))
})

router.get('/:id', (req,res)=> { // muestra proyectos buscado por id params
    const id = req.params.id; 
    proyecto.find({userList: [id]})
    .then(response => res.json(response))
})

router.put('/:id', (req,res)=>{ // modifica proyecto existente, incluso modifica la lista de integrantes, hay que enviarle una copia de los datos del proyecto que incluya los cambios por body
    const id = req.params.id; 
    proyecto.updateOne({_id: id}, req.body)
    .then(response => response.save())
    .then(response => res.json(response))
    .catch(err => res.send(err))
})

router.put('/poner/:id', (req,res)=>{//agrega bug a la lista de bugs del proyecto
    const id = req.params.id; 
    proyecto.findOneAndUpdate(
        {
            _id: id
        }, 
        {
            $addToSet:{
                bugList: req.body.id
            }
        }
    )
    .then(response => res.json(response))
    .catch(err => res.send(err))
})
router.put('/quitar/:id', (req,res)=>{//quitar bug de la lista de bugs del proyecto
    const id = req.params.id; 
    proyecto.findOneAndUpdate(
        {
            _id: id
        }, 
        {
            $pull:{
                bugList: req.body.id
            }
        }
    )
    .then(response => res.json(response))
    .catch(err => res.send(err))
})

module.exports = router; 