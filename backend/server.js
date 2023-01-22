require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const healthRoutes = require('./routes/healthroutes');

const app = express();
app.use(express.json());
app.use('/', healthRoutes);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("connected to database");
        app.listen(process.env.PORT, () => {
            console.log(`Listening to requests on port ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    })