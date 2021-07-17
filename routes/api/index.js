const router = require('express').Router();
// need to add the required routes once built
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;