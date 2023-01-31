const express = require('express')

// controller functions
const { takeappointment} = require('../controllers/appointmentController')

const router = express.Router()

// login route
router.post('/appointment', takeappointment)

// signup route
// router.post('/signup', signupUser)

module.exports = router