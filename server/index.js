const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express()
require('dotenv').config()


const PORT = process.env.PORT || 3001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const JWT_USER = process.env.JWT_USER
const JWT_DATA = process.env.JWT_DATA

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // Разрешить доступ с любого домена
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const RegistrationSchema = require('./models/Register')
const UserModel = require('./models/Login') 

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(cors())
app.use(express.json())
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.jqnwcxx.mongodb.net/${DB_NAME}`)


const zeroGameData = [
    {"id": "1", "bestResult": "", "name": "Reaction Speed"},
    {"id": "2", "bestResult": "", "name": "Aim Trainer"},
    {"id": "3", "bestResult": "", "name": "Chimp Test"},
    {"id": "4", "bestResult": "", "name": "Numbers Memory"},
    {"id": "5", "bestResult": "", "name": "Visual Memory"},
    {"id": "6", "bestResult": "", "name": "Typing Test"}
]

app.post('/registration', (req, res) => {
    const {name, email, password} = req.body
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    RegistrationSchema.findOne({email: email})
    .then(user => {
        if(user) {
            res.json('Account already exist')
        } else {
            const gameData = jwt.sign({data: zeroGameData}, JWT_DATA)
            const token = jwt.sign({email: email, name: name}, JWT_USER)
            RegistrationSchema.create({name: name, email: email, password: hash, token: token, gameData: gameData})
            // .then(result => res.json(token)) // ищем по токену
            .then(result => res.json({token: result.token, gameData: result.gameData}))
            .catch(err => console.log(err))
        }
    }).catch(err => console.log(err))
})

app.post('/login', (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email: email})
    .then(user => {
        const isPasswordCorrect = bcrypt.compare(password, user.password);
        if(user) {
            if(isPasswordCorrect){
                res.json(user)
            } else {
                res.json("incorrect login or password")
            }
        } else {
            res.json('incorrect login or password')
        }
    })
})

app.post('/find', (req, res) => {
    const tokenUser = req.body.token
    const tokenGameData = req.body.gameData
    RegistrationSchema.findOne({token: tokenUser})
        .then(data => {
            if(data) {
                const decodedUser = jwt.verify(tokenUser, JWT_USER);
                const decodedTokenGameData = jwt.verify(data.gameData, JWT_DATA)
                res.json({
                    email: data.email,
                    name: data.name,
                    gameData: decodedTokenGameData
                })
                // res.json(decodedTokenGameData)
                // console.log(data.name);
            } else {
                res.json('Ошибка, такого пользователя нет')
            }
        }).catch(err => console.log(err))
})

app.put('/newGameData', async (req, res) => {
    try {
        const request = req.body;
        const gameId = req.body.params.id;
        const gameBestResult = req.body.params.bestResult;

        // расшифровываем gameData
        // const decodedGameData = jwt.verify(req.body.gameCodedToken, 'gameData');
        const user = req.body.userToken; // берём токен с запроса
        const response = await UserModel.findOne({ token: user }); // ищем по нему пользователя
        const codedGameData = response.gameData // геймДата с бд
        // res.json(response.gameData);
        const decodedGameData = jwt.verify(codedGameData, JWT_DATA); // расшифровываем гд
        decodedGameData.data.forEach(item => { // расшифрованная дата, устанавливаем данные
            if (item.id == gameId) {
                item.bestResult = gameBestResult;
            }
        });
        //новая дата
        const newCodedGameData = jwt.sign(decodedGameData, JWT_DATA);
        
  
        



        if (response) {
            // обновляем gameData у пользователя
            await UserModel.updateOne({ token: user }, { $set: { gameData: newCodedGameData } });
            res.json(response.gameData);
        } else {
            res.status(404).json({ error: 'Пользователь не найден' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
});


app.listen(PORT, ()=> {
    console.log('Server working')
})