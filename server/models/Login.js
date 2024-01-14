const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    gameData: String,
    token: String
})

const UserModel = mongoose.model("registers", UserSchema) // maybe problem
module.exports = UserModel