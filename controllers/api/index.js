const userRoutes = require('./userRoutes.js');
const router = require('express').Router();
const postRoutes = require('./postRoutes.js');

router.use("/users", userRoutes);
router.use("/posts", postRoutes);

module.exports = router;