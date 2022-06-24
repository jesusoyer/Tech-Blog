const {Model, DataTypes}= require('sequelize');



class Reply extends Model{}

const sequelize = require('../config/connection');

Reply.init(
    {
        id:{ 
        type:DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },
    
     reply_text:{
        type:DataTypes.STRING,
        allowNull:false,
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
        history_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'history',
              key: 'id',
            }

    
        },
    },
    {
    sequelize,
    timestamps: false,
    freezeTableName:true,
    underscored:true,
    modelName:'reply'
    },

);


module.exports = Reply;