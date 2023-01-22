const Health = require('../models/healthmodel');

const postParameters = async (req, res) => {
    const { age, gender, height, weight, username, bmi } = req.body;
    console.log(age, gender, height, weight, username, bmi);
    try {
        const health = await Health.create({ age, gender, height, weight, username, bmi })
        res.status(200).json(health)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = postParameters;