const  History  = require('../models/b_history.js');


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