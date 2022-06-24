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
    
     post_title:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     post_text:{
        type:DataTypes.STRING,
        allowNull: false,
     },
     date_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
     user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
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