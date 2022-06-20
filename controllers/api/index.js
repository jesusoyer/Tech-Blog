const router = require('express').Router();
const historyRoutes = require('./history-route');

router.use('/history', historyRoutes);

module.exports = router;