const mongoose = require('mongoose');

const conversationListSchema = mongoose.Schema(
    {
        userId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'patient',
        },
        patientName: {
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

const conversationList = mongoose.model('ConversationList', conversationListSchema);

module.exports = conversationList;
