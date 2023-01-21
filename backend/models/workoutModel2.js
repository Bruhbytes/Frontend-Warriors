const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchemanew = new Schema({
  message: {
    type: String,
    required: true
  },
  user1: {
    type: String,
    required: true
   }
  //,
  // load: {
  //   type: Number,
  //   required: true
  // },
  // user_id: {
  //   type: String,
  //   required: true
  // }
}, { timestamps: true })

module.exports = mongoose.model('Workoutnew', workoutSchemanew)