
const router = require('express').Router();
const  History  = require('../../models/History');


router.get('/', async (req, res) => {
    try {
      const exampleData = await History.findAll({});
      console.log(exampleData)
      res.status(200).json(exampleData);
      
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
    });

    module.exports=router;