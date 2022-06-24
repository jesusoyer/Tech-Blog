const History = require('./History');
const User = require("./user")

User.hasMany(History, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  History.belongsTo(User, {
    foreignKey: 'user_id'
  });


module.exports = {History, User};