const Sequelize = require('sequelize')
require('dotenv').config();


const sequelize = new Sequelize(
    process.env.DB_Name,
    process.env.user_name,
    process.env.password ,
    {
        host:'localhost',
        dialect:'mysql',
        
    }
)
module.exports = sequelize