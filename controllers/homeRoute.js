const router = require('express').Router();
const  History  = require('../models/History');
const User = require('../models/user')
const Reply = require('../models/reply')
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
      const exampleData = await History.findAll({});
      console.log(exampleData)
      // res.status(200).json(exampleData);
    
      const exam = exampleData.map((examp) =>
      examp.get({ plain: true })
    );
   
       
    req.session.save(()=> {
            if(req.session.countVisit){
                req.session.countVisit++;
            } else {
                req.session.countVisit =1;
            }           
        

    res.render('homepage', {
      exam, 
      loggedIn: req.session.loggedIn,
    }); 
    });   
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

router.get('/profile', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const a = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: History },]
      });

      const b = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Reply },]
      });


      // need to join three tables with sequelize

      const usera = a.get({ plain: true });
      const userb = b.get({ plain: true });

      const combined= {username: usera.username, replies: userb.replies, histories: usera.histories}
      console.log(combined)
  

      res.render('profile', {
        ...combined,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
      console.log("your here")
    }
  });








    router.post('/', async (req, res) => {
        try {
          const locationData = await History.create({
            post_name: req.body.post_name,
          });
          res.status(200).json(locationData);
        } catch (err) {
          res.status(400).json(err);
        }
        // create a category
      });

      router.delete('/:id', async (req, res) => {
        try {
          const tagData = await History.destroy({
            where: {
              id: req.params.id,
            },
          });
      
          if (!tagData) {
            res.status(404).json({ message: 'No reader found with that id!' });
            return;
          }
      
          res.status(200).json(tagData);
        } catch (err) {
          res.status(500).json(err);
        }
        //delete tags by its id value
      });


    module.exports=router;