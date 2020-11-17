const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: (v) => {
            return require('../../ultils/checkData').validateEmail(v)
        }
    },
    phoneNumber: {
        type: Number,
        unique: true
    },
    role: Number,

})

module.exports = mongoose.model("User", userSchema)