const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/TesteDB');

const objetodb = mongoose.connection

objetodb.on('connected', () => console.log("connected😃"))
objetodb.on('error', () => console.log("Ocorreu um erro"))

module.exports = mongoose