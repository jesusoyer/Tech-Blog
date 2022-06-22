const router = require('express').Router();
const userRoutes = require('./userRoutes')
const historyRoutes = require('./history-route');

router.use('/users', userRoutes);
router.use('/history', historyRoutes);

module.exports = router;