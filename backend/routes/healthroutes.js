const express = require('express');
const router = express.Router();
const postParameters = require('../controllers/healthcontrollers');
const getCalculations = require("../controllers/healthcontrollers2");

router.post('/calculate', postParameters);

router.post('/get-calculations', getCalculations);

module.exports = router;