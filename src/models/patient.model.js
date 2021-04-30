const mongoose = require('mongoose');

const patientSchema = mongoose.Schema(
    {
        DOB: {
            type: String,
        },
        Email: {
            type: String,
        },
        GroupNumber: {
            type: String,
        },
        HomePhone: {
            type: String,
        },
        MailingAddress: {
            type: String,
        },
        MartialStatus: {
            type: String,
        },
        Notes: {
            type: String,
        },
        PatientName: {
            type: String,
        },
        PrimaryInsurance: {
            type: String,
        },
        SSN: {
            type: String,
        },
        Sid: {
            type: String,
        },
        StreetAddress: {
            type: String,
        },
        SubscriberName: {
            type: String,
        },
        WorkPhone: {
            type: String,
        },
        Conditions: [{
            type: String
        }]
    },
    {
        timestamps: true,
        toObject: { getters: true },
        toJSON: { getters: true },
    }
);

const patient = mongoose.model('Patient', patientSchema);

module.exports = patient;
