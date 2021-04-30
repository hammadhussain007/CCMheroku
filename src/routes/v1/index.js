const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const patientRoute = require('./patient.route');


const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/patient', patientRoute);


module.exports = router;
