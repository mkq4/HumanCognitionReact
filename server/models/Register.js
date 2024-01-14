const mongoose = require('mongoose')

const RegistrationSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    gameData: String,
    token: String
})

const RegisterModel = mongoose.model("register", RegistrationSchema)
module.exports = RegisterModel