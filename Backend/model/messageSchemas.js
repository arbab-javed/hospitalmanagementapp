import mongoose from 'mongoose'
import validator from 'validator'

const messageSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name should contain at least 3 chracters"]
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Last name should contain at least 3 chracters"]
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Please provide a valid Email"]
    },
    phonenumber: {
        type: String,
        required: true,
        minLength: [11, "Phone number must contain exact 11 digits "]
    },
    message: {
        type: String,
        required: true,
        minLength: [10, "Message must contain at least 10 chracters  "]
    }
})

export const Message = mongoose.model("Message", messageSchema)