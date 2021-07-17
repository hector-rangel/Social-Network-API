const router = required('express').Router();
// need to add the required routes once built
const thoughtRoutes = required('./thought-routes');
const userRoutes = required('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;