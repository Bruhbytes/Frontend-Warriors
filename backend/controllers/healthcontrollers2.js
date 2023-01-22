const Health = require('../models/healthmodel');

const getCalculations = async (req, res) => {
    const { username } = req.body;
    try {
        const calculations = await Health.find({ username });
        console.log(calculations);
        res.send(calculations);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getCalculations;