var express = require('express')
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var cors = require('cors')
var path = require('path')

var app = express()

const route = require('./routes/route')

mongoose.connect('mongodb://localhost:27017/contactlist')
// mongoose.connect('mongodb://test1:Poiuytrewq321654987@localhost:27017/test1')

mongoose.connection.on('connected',()=>{
    console.log('connected')
})

mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('err'+err)
    }
})

const port = 4000

app.use(cors())

app.use(bodyparser.json())

app.use('/api', route)

app.get('/', (req, res)=>{
    res.send('foobar')
})

app.listen(port,()=>{
    console.log('Server started at port: http://localhost:'+port)
})


