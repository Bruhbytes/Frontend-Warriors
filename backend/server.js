require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const appointmentRoutes = require('./routes/appointment')
const healthRoutes = require('./routes/healthroutes');
const Workout = require('./models/workoutModel')
const Workoutnew = require('./models/workoutModel2')
const Appointment = require('./models/appointmentModel')
const Appointmentnew = require('./models/appointmentModelnew')
// express app
const app = express()
// 
const schedule=require('node-schedule')
// schedule.scheduleJob('*/30 * * * * *',async()=>
// { 
//   const workout0 = await Workoutnew.deleteMany({})

//   if (!workout0) {
//     console.log("failure0")
//   }
//   const workouts = await Workout.find({});
//   if (!workouts) {
//     console.log("failure1")
//   }

//   const workout2 = await Workoutnew.insertMany(workouts);
//   if (!workout2) {
//     console.log("failure2")
//   }
//   const workout3 = await Workout.deleteMany({})

//   if (!workout3) {
//     console.log("failure3")
//   }

//   console.log("success")
// }
// )
// middleware
// schedule.scheduleJob('*/59 * * * * *',async()=>
// { 
//   const appointment0 = await Appointmentnew.deleteMany({})

//   if (!appointment0) {
//     console.log("failure0")
//   }
//   console.log("ho gaya 0")
//   const appointments = await Appointment.find({});
//   if (!appointments) {
//     console.log("failure1")
    
//   }
//   console.log("ho gaya 1")
// // console.log(appointments)
//   const appointment2 = await Appointmentnew.insertMany(appointments);
//   if (!appointment2) {
//     console.log("failure2")
//   }
//   console.log("ho gaya 2")
//   // console.log(appointment2)
//   const appointment3 = await Appointment.deleteMany({})

//   if (!appointment3) {
//     console.log("failure3")
//   }
//   console.log("ho gaya 3")
//   // console.log(appointment3)
//   console.log("success")
// }
// )
setInterval(async()=>
{ 
  const appointment0 = await Appointmentnew.deleteMany({})

  if (!appointment0) {
    console.log("failure0")
  }
  console.log("ho gaya 0")
  const appointments = await Appointment.find({});
  if (!appointments) {
    console.log("failure1")
    
  }
  console.log("ho gaya 1")
// console.log(appointments)
  const appointment2 = await Appointmentnew.insertMany(appointments);
  if (!appointment2) {
    console.log("failure2")
  }
  console.log("ho gaya 2")
  // console.log(appointment2)
  const appointment3 = await Appointment.deleteMany({})

  if (!appointment3) {
    console.log("failure3")
  }
  console.log("ho gaya 3")
  // console.log(appointment3)
  console.log("success")
},50000
)
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)
app.use('/api/doctor', appointmentRoutes)
app.use('/h', healthRoutes);
// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })