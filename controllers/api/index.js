const userRoutes = require('./userRoutes.js');
const router = require('express').Router();

router.use("/users", userRoutes);

module.exports = router;