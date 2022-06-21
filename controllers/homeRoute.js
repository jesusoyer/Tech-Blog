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
   
       
    req.session.save(()=> {
            if(req.session.countVisit){
                req.session.countVisit++;
            } else {
                req.session.countVisit =1;
            }
        

    res.render('homepage', {
      exam, 
      countVisit:req.session.countVisit,
    }); 
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