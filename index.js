//modules and Globals
require('dotenv').config()
const express =require('express')
const app = express()


//Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


//Controllers and Routes
app.use('/places', require('./controllers/places'))

app.get('/',function(req,res){
    res.render('home')
})

app.get('*', function(req, res){
    res.render('error404')
})

app.listen(process.env.PORT)