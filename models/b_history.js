const {Model, DataTypes}= require('sequelize')
const sequelize = require('../config/connection.js')


class History extends Model{}

History.init(
    {
        id:{ 
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    
     post_name:{
        type:DataTypes.STRING,
        allowNull:false,
     },
    },
    {
    sequelize,
    timestamps: false,
    modelName:'history'
    },

)

console.log({History})
module.exports = History;