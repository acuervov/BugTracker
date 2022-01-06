const {Router} = require('express');
const router = Router();
const user = require('../models/User') 


router.get('/name-:name', (req,res)=> { // muestra usuario por params id
    const name = req.params.name; 
    const regex = new RegExp(name, 'i') // i for case insensitive
    user.find({name: {$regex: regex}})    
    .then(response => {res.json(response)})
})

router.get('/:id', (req,res)=> { // muestra usuario por params id
    const id = req.params.id; 
    user.findOne({'id': id})
    .then(response => {res.json(response)
    })
})

router.post('/', (req, res)=> { // agrega nuevo usuario
    console.log("body post", req.body)
const nuevoUser = new user(req.body)
nuevoUser.save()
.then(response=> res.json(response))
.catch(err=>res.send(err))
})

router.put('/poner/:id', (req,res)=>{//agrega proyecto a la lista de proyectos del usuario
    const id = req.params.id; 
    user.findOneAndUpdate(
        {
            _id: id
        }, 
        {
            $addToSet:{
                proyectos: req.body.id
            }
        }
    )
    .then(response => res.json(response))
    .catch(err => res.send(err))
})
router.put('/quitar/:id', (req,res)=>{//quitar proyecto de la lista de proyectos del usuario
    const id = req.params.id; 
    user.findOneAndUpdate(
        {
            _id: id
        }, 
        {
            $pull:{
                proyectos: req.body.id
            }
        }
    )
    .then(response => res.json(response))
    .catch(err => res.send(err))
})




module.exports = router; 