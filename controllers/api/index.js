const userRoutes = require('./userRoutes.js');
const router = require('express').Router();
const postRoutes = require('./postRoutes.js');
const commentRoute = require('./commentRoute.js');

router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use('/comments', commentRoute);

module.exports = router;