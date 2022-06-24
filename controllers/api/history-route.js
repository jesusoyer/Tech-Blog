
const router = require('express').Router();
const  History  = require('../../models/History');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
  try {
    const newpost = await History.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newpost);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/', async (req, res) => {
    try {
      const exampleData = await History.findAll({});
      console.log(exampleData)
      // res.status(200).json(exampleData);
    
      const exam = exampleData.map((examp) =>
      examp.get({ plain: true })
    );
      res.status(200).json(exam);
       
    } catch (err) {
      console.log(err)
      res.status(500).json(err)
    }
    });

    module.exports=router;