const seedData = require("./history_seeds");
const {User, History} = require("../models")
const sequelize = require ('../config/connection');
const userData = require('./user-seeds.json')


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
     await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  

  
    process.exit(0);
  };







seedDatabase();