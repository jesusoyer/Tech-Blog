const History = require('../models/History');

const historyData = [
    {
        post_name: "first post"
    },
    {
        post_name: "second post"
    },
    {
        post_name: "third post"
    }
];

const seedData = () => History.bulkCreate(historyData)

module.exports = seedData;