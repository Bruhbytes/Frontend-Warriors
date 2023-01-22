const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema

const appointmentSchemanew = new Schema({
  Name: {
    type: String,
    required: true,
    // unique: true
  },
  Address: {
    type: String,
    required: true,
    // unique: true
  },
  Phone: {
    type: String,
    required: true,
    // unique: true

  },
  Slot: {
    type: Number,
    required: true,
    unique: true

  }
 
}, { timestamps: true })

appointmentSchemanew.plugin(uniqueValidator);
  





module.exports = mongoose.model('Appointmentnew', appointmentSchemanew)