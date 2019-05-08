'use strict';
const mongoose = require('mongoose'),
    User = mongoose.model('User');
const path = require('path');
var currentId = 0;

//Function that finds user by req.body 

function findById(req, res)
{
    User.findById(req.params.userId, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
}

// Function that finds user by req.param
function findByIdParam(req, res) 
{
    User.findById(req.params.userId, function(err,user){
        if(err){
            res.send(err);
        }
        res.send(user);
    });
}

//Function that finds user by firstname and last name 
function findUser(req, res)
{
    var firstname = req.body.firstName;
    var lastname = req.body.lastName;
    console.log(req.body);
    User.find({firstName: firstname, lastName: lastname}, function(err,user){
        if(user.length == 0){
            console.log("user not found");
            res.status(204).send("User not found");
        }
        else{
            currentId = user[0]._id;
            res.json(user);
        }
    });
};

//Function that finds all users

function findAll(req, res)
{
    var usersProtection = {
        __v: false,
        EquipmentList: false
    };

    User.find({}, usersProtection, function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
};

//Function that saves the user

function save(req, res)
{
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    User.find({firstName: firstName, lastName: lastName}, function(err,user){
        if(user.length == 0){
            var newUser = new User(req.body);
            newUser.save(function(err, user){
                if(err){
                    res.send(err);
                }
                res.redirect('http://localhost:8080');

            });
        }    
        else{
            res.sendFile(path.join(__dirname + '/duplicateUser.html'));
        }
        
    })
};

// Function that updates user
function updateUser(req, res)
{
    User.findUserAndUpdate({_id: req.params.userId}, req.body, {new:true}, function(err, user){
        if (err){
            res.send(err);
        }
        res.json(user);
    });
};

// Function that deletes user
function deleteById(req, res)
{
    User.remove({_id: req.params.userId}, function(err,user){
        if(err){
            res.send(err);
        }
        res.redirect('http://localhost:8080');
    });
};

//Function that creates a equipment
function createEquipment(req, res)
{
    var equipment = req.body;
    User.findOneAndUpdate(
        {_id: req.params.userId},
        {$push: {EquipmentList: equipment}},
        function(err,user)
        {
            if(err)
            {
                res.send(err);
            }
            res.json(user);
        });
};

// Function that gets user equipment
function getUserEquipment(req, res)
{
    User.findById(req.params.userId, function(err, user)
    {
        if(err)
        {
            res.send(err);
        }
    });
}


function autoComplete(req, res){
    var exercises = new Array();
    var output = new Array();
    var search = req.params.search.toLowerCase();
   
        var usersProtection = {
            __v: false,
            PhotoList: false
            
        };
    
        User.find({}, usersProtection, function(err, user){
            if(err){
                res.send(err);
            }
            //console.log(user);
            
            for(var i = 0; i < user.length - 1; i++){

                if(user[i].ExerciseList.length != null && user[i] != null){
                    for(var j = 0; j < user[i].ExerciseList.length; i++){
                        if(!exercises.includes(user[i].ExerciseList[j].name.trim().toLowerCase())){
                            exercises.push(user[i].ExerciseList[j].name.trim().toLowerCase());
                        }
                        
                        
                    }
                   
                }
                

            }
      
            for(var i = 0; i < exercises.length; i++){
                if(exercises[i].includes(search)){
                    console.log(exercises[i]);
                    output.push(exercises[i]);
                }
                
            }

            res.send(output);
            
        });

   
}

module.exports = {
    findById, 
    findAll, 
    save, 
    deleteById,
    createEquipment,
    updateUser,
    getUserEquipment,
    findUser,
    findByIdParam,
    autoComplete
}