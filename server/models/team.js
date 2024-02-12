import {model, Schema} from "mongoose";

const teamSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    challenge: {
        type: String,
        enum: ['Junior', 'Autonomous', 'All Terrain', 'Fighter'],
        required: true,
    },

    establishment: {
        type: String,
        required: true,
    },
    club: {
        type: String,
        required: true,
    },
    teams: [{
        email: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: false,
        },
        phone: {
            type: String,
            required: false,
        }
    }],
    score: {
        type: Number,
        required: false,
        default: 0
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    isPresent: {
        type: Boolean,
        default: false,
    }
});

export default model('team', teamSchema);