const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemausuario = new eschema({
    name: String,
    email: String,
    senha: String,
    id: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemausuario)
/*
router.get("/exemplo", (req, res) => {
    res.send("Yeah Sir!")
})*/
router.post("/CriarUsuario", (req, res) => {
    const novousuario = new ModeloUsuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        id:req.body.id
    })
    novousuario.save(function(err) {
        if(!err) {
            res.send("Usuario criado")
        } else {
            res.send(err)
        }
    })
})

module.exports = router