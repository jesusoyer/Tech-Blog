const {Model, DataTypes}= require('sequelize');



class History extends Model{}

const sequelize = require('../config/connection');

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