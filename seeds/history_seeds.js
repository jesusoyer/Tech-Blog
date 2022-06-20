const History = require('../models/History');

const historyData = [
    {
        post_name: "first post"
    }
];

const seedData = () => History.bulkCreate(historyData)

module.exports = seedData;