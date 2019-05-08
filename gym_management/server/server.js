const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model.js');
const userController = require('./controller/user.controller');
mongoose.Promise = global.Promise; //Not sure what this does
mongoose.connect('mongodb+srv://a1-ant:TB2freshh23^@cluster0-whq5b.mongodb.net/gym-system', { useNewUrlParser: true } );
const app = express();
const connection = mongoose.connection;

// Checks to see if database is connected
connection.on('connected', function(){
  console.log("DB connected");
})

//Sets the port 
const port = 3000;


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 'X-Requested-With, Content-Type');
    next();
  });

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());


//Return all users
app.get('/user', userController.findAll);

//Saves a user
app.post('/signup', userController.save); //Saves a user within the database

//Returns users
app.get('/user/userId', userController.findById); //Returns a user by Id
app.post('/userGet', userController.findByIdParam); //Returns a user
app.post('/login', userController.findUser); //Returns a user
app.get('/user/:userId', userController.findById); //Returns a user

//Updates a user
app.put('/userUpdate', userController.updateUser); //Updates a user

//Deletes user
app.delete('/user/:userId', userController.deleteById); //Deletes a user
app.post('/deleteUser/:userId', userController.deleteById); //Deletes a user

//Creates an equipment
app.post('/equipment/:userId', userController.createEquipment); //Creates an equipment

//Gets all user equipment
app.post('/equipment/userId', userController.getUserEquipment); //Gets all user equipment

//Autocomplete
app.get('/autocomplete/:search', userController.autoComplete);


//Port
app.listen(port, () => console.log(`Listening on port ${port}...`));