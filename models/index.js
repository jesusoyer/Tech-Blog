const History = require('./History');
const User = require("./user")
const Reply = require('./reply');
const Tablejoin = require('./tablejoin');



User.hasMany(History, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  
  History.belongsTo(User, {
    foreignKey: 'user_id'
  });
  Reply.belongsTo(User,{
    foreignKey: "user_id"
  })

  User.hasMany(Reply,{
    foreignKey: "user_id"
  })

  History.hasMany(Reply,{
    foreignKey: "history_id"
  })

Reply.belongsTo(History,{
    foreignKey:'history_id'
})

// Reply.belongsToMany(User,{
//     through: History
// })


History.belongsToMany(Reply,{
    through: Tablejoin
  });
  Reply.belongsToMany(History,{
    through: Tablejoin
  });


// Reply.belongsTo(History,{
//     foreignKey: 'history_id'
// })


// Products belongToMany Tags (through ProductTag)


//   Reply.belongsToMany(History,{
//     through:History
//   }) 

  

//   User.belongsToMany(R,{
//     through: History
//   });

  // Tags belongToMany Products (through ProductTag)
//   Tag.belongsToMany(Product,{
//     through:ProductTag,
//   });


//   History.hasMany(Reply,{
//     foreignKey: 'history_id',
    
//   });

//   Reply.belongsTo(User, {
//     foreignKey: 'user_id',
//   });
  

  


module.exports = {History, User, Reply,Tablejoin };