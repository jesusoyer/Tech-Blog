const History = require('../models/b_history');

const historyData = [
    {
        post_name: "first post"
    }
];

const seedData = () => History.bulkCreate(historyData)

module.exports = seedData;