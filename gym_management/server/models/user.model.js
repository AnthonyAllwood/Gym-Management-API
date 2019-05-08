'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserModel = new Schema({
    firstName: String,
    lastName: String,
    EquipmentList: [
        {
            _id:false,
            name: String,
            cost: Number,
            Date: String
        }
    ]
},
{collection: 'users'});

module.exports = mongoose.model('User', UserModel);