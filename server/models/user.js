import {model, Schema} from "mongoose";

const userSchema = new Schema({
    _id: Schema.Types.Number,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

export default model('User', userSchema);