const express = require ('express')
require('dotenv').config()
const app = express()

app.get('/',function(req,res){
    res.send('hello world')
})

app.listen(3000)