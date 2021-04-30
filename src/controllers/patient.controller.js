const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { patientService } = require('../services');

const createPatient = catchAsync(async (req, res) => {
    const patient = await patientService.createPatient(req.body);
    res.status(httpStatus.CREATED).send(patient);
});

const getPatients = catchAsync(async (req, res) => {
    const patient = await patientService.getPatient();
    res.status(httpStatus.CREATED).send(patient);
});


const patientAddToConversation = catchAsync(async (req, res) => {
    const patient = await patientService.patientAddToConversation(req.body);
    res.status(httpStatus.CREATED).send(patient);
});

const getConversationList = catchAsync(async (req, res) => {
    const patient = await patientService.getConversationList();
    res.status(httpStatus.CREATED).send(patient);
});

const beginConversation = catchAsync(async (req, res) => {
    const patient = await patientService.beginConversation(req.body);
    res.status(httpStatus.CREATED).send(patient);
});

const addToConversation = catchAsync(async (req, res) => {
    const patient = await patientService.addToConversation(req.body);
    res.status(httpStatus.CREATED).send(patient);
});

const getConversation = catchAsync(async (req, res) => {
    const patient = await patientService.getConversation(req.body);
    res.status(httpStatus.CREATED).send(patient);
});

module.exports = {
    createPatient,
    getPatients,
    patientAddToConversation,
    getConversationList,
    beginConversation,
    addToConversation,
    getConversation

};
