const mongoose = require('mongoose');

const personalSuggestionsSchema = mongoose.Schema(
    {
        adminId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        patientId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'patient',
        },
        Suggestion: {
            type: String,
        },



    },
    {
        timestamps: true,
        toObject: { getters: true },
        toJSON: { getters: true },
    }
);

const PersonalSugesstions = mongoose.model('PersonalSugesstions', personalSuggestionsSchema);

module.exports = PersonalSugesstions;
