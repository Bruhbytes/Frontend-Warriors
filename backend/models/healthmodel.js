const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const healthSchema = new Schema({
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    bmi: {
        type: Number
    }
})

module.exports = mongoose.model('Health', healthSchema);