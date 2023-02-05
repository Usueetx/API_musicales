const express = require('express')
// const router = express()
const router = express.Router()

// CRUD musicales
router.get('/', function(req, res){
    let db = req.app.locals.db
    db.collection('musicales').find().toArray(function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            console.log(data)
            res.send(data)
        }
    });
})

router.get('/:Titulo', function(req, res){
    console.log(req.app.locals);
    req.app.locals.db.collection('musicales').find({Titulo: req.params.Titulo}).toArray(function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            console.log(data)
            res.send(data)
        }
    });
})

router.post('/', function(req, res){
    req.app.locals.db.collection('musicales').insertOne(req.body, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
                res.send(data);
            }
           
        
    })
})

router.put('/:Titulo', function(req, res){
    console.log(req.body);
    req.app.locals.db.collection('musicales').updateOne({Titulo: req.params.Titulo}, {$set: {"Titulo":(req.body.Titulo), "Compositor":(req.body.Compositor)}}, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            res.send(data)
        }
    })
})

router.delete('/:Titulo', function(req, res){
    
    req.app.locals.db.collection('musicales').deleteOne({Titulo: req.params.Titulo}, function(err, data){
        if(err !== undefined){
            console.log(err);
            res.send({mensaje: "error "+ err})
        } else {
            res.send(data)
        }
    })
})

module.exports = router;