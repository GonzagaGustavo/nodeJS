const express = require('express')
const app = express()

//Conexão mongoDB 
const DB = require('./Conection')

const rotasusuario = require('./Routes/Usuario')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: 'true'}))

app.use('/usuario', rotasusuario)

app.get("/", (req, res) => {
    res.send("Olá")
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"))