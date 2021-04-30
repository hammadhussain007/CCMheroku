const mongoose = require('mongoose');

const conversationSchema = mongoose.Schema(
    {
        patientId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'patient',
        },
        adminId: {

            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        messageFrom: {
            type: String,
        },

        message: {
            type: String
        }

    },
    {
        timestamps: true,
        toObject: { getters: true },
        toJSON: { getters: true },
    }
);

const conversation = mongoose.model('Conversation', conversationSchema);

module.exports = conversation;
