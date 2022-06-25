const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Tablejoin extends Model {}

Tablejoin.init(
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    history_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'history',
        key:'id'
      }
    },
    reply_id:{
      type:DataTypes.INTEGER,
      references:{
        model:'reply',
        key:'id'
      }

    }
    
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tablejoin',
  }
);

module.exports = Tablejoin;
