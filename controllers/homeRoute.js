const router = require('express').Router();
const  History  = require('../models/History');


router.get('/', async (req, res) => {
    try {
      const exampleData = await History.findAll({});
      console.log(exampleData)
      // res.status(200).json(exampleData);
    
      const exam = exampleData.map((examp) =>
      examp.get({ plain: true })
    );
    console.log(exam);
    console.log(exam[0].post_name)

    res.render('homepage', {
      exam,
    });    
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
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


    module.exports=router;