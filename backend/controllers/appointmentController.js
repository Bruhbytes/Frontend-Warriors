const Appointment = require('../models/appointmentModel')
const mongoose = require('mongoose')


const takeappointment = async (req, res) => {
    const {Name,Address,Phone,Slot} = req.body
  
    let emptyFields = []
  
    if(!Name) {
      emptyFields.push('Name')
    }
    if(!Address) {
      emptyFields.push('Address')
    }
    if(!Phone) {
      emptyFields.push('Phone')
    }
    if(!Slot) {
      emptyFields.push('Slot')
    }
    if(emptyFields.length > 0) {
      return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }
    try
    {
      // const exists= await Appointment.find({Slot})
      // if(exists)
      // {
      //   res.status(400).json({error: error.message})
      // }
    const name = await Appointment.create({Name,Address,Phone,Slot})
    res.status(200).json(name)
  } catch (error) {
    if(error.code===11000)
   {
     console.log("Hi")
     res.status(11000).json({error});
   }
   else{
     console.log("vuv")
    res.json("Appointment exists")
   }

    
  }
}
module.exports = {
    takeappointment
  }