const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const patientController = require('../../controllers/patient.controller');

const router = express.Router();

router.route('/addpatient').post(patientController.createPatient)
router.route('/getAllPatients').get(patientController.getPatients)

router.route('/addtoconversation').post(patientController.patientAddToConversation)
router.route('/getconversationlist').get(patientController.getConversationList)
router.route('/beginconversation').post(patientController.beginConversation)

router.route('/addconversation').post(patientController.addToConversation)
router.route('/getconversation').post(patientController.getConversation)




module.exports = router;
