const router = require('express').Router();
const userRoutes = require('./userRoutes')
const historyRoutes = require('./history-route');
const replyRoutes = require('./reply-route')

router.use('/users', userRoutes);
router.use('/history', historyRoutes);
router.use('/reply', replyRoutes)

module.exports = router;