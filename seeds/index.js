
const {User, History, Reply, Tablejoin} = require("../models")
const sequelize = require ('../config/connection');
const userData = require('./user-seeds.json');
const historyData = require('./post-seeds.json');
const replyData = require('./reply-seeds.json');
const tablejoinData = require('./tablejoin.json')

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const history of historyData) {
        await History.create({
          ...history,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
      for (const reply of replyData) {
        await Reply.create({
          ...reply,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
      for (const join of tablejoinData) {
        await Tablejoin.create({
          ...join,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }
  
    process.exit(0);
  };







seedDatabase();