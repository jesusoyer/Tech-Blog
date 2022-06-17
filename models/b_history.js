const {Model, DataTypes}= require('sequelize');
const sequelize = require('../config/connection');


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
    freezeTableName:true,
    underscored:true,
    modelName:'history'
    },

);


module.exports = History;