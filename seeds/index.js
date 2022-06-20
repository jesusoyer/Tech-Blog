const seedData = require("./history_seeds");

const sequelize = require ('require')

const seedTheData = async ()=> {
    await sequelize.sync({force: true});
    console.log('database synced');
    await seedData();
    console.log('data seeded');
    process.exit(0);
};

seedTheData();