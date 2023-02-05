const express = require('express')
const cors = require('cors')
const mongodb = require('mongodb');


const app = express();
let MongoClient = mongodb.MongoClient;
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

MongoClient.connect('mongodb://127.0.0.1:27017', function(err, client){
    if(err !== undefined){
        console.log(err)
    } else {
        console.log('dbconnection is OK');
        app.locals.db = client.db('peliculas')
    }
})

let musicales = require('./routes/musicales')

app.use('/musicales', musicales)



app.use(cors())
app.listen(3000)