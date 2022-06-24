const History = require('./History');
const User = require("./user")
const Reply = require('./reply')
User.hasMany(History, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  
  History.belongsTo(User, {
    foreignKey: 'user_id'
  });

//   Reply.belongsTo(History,{
//     foreignKey: 'history_id',
    
//   });

  Reply.belongsTo(User,{
    foreignKey: 'user_id'
  })
  

  


module.exports = {History, User, Reply };