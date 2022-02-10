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
router.get("/teste", (req, res) => {
    res.send("Yeah Sir!")
})*/
// Criar usuário
router.post("/CriarUsuario", (req, res) => {
    const novousuario = new ModeloUsuario({
        name: req.body.name,
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
// Obter todos os usuários
router.get('/obterUsuarios', (req, res) => {
    ModeloUsuario.find({}, function(docs, err) {
        if(!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})
// Obter data de usuario
router.post('/datausuario', (req, res) => {
    ModeloUsuario.find({id: req.body.id}, function(docs, err) {
        if(!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})
// Editar usuário
router.post("/atualizausuario", (req, res) => {
    ModeloUsuario.findOneAndUpdate({id: req.body.id}, {
        name: req.body.name,
        email: req.body.email,
        senha: req.body.senha
    }, (err) => {
        if(!err) {
            res.send("Usuario editado!")
        } else {
            res.send(err)
        }
    })
})
//Deletar usuario
router.post("/deleteusuario", (req, res) => {
    ModeloUsuario.findOneAndDelete({id: req.body.id}, (err) => {
        if(!err) {
            res.send("Usuario deletado!")
        } else {
            res.send(err)
        }
    })
})

module.exports = router