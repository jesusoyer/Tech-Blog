const router = require('express').Router();
const  Reply  = require('../../models/reply');
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
  try {
    const newpost = await Reply.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newpost)
    res.status(200).json(newpost);
    
  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/', async (req, res) => {
    try {
      const exampleData = await Reply.findAll({});
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