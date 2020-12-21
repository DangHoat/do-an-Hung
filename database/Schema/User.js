const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return require('../../ultils/checkData').validatePassword(v);
            },
            message: props => `${props.value} ít nhất 8 kí tự,1 chữ hoa và 1 số!`
          }
    },
    phoneNumber: {
        type: Number,
        unique:true
    },
    role: {
        type: Number,
        min: 1,
        max: 2
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        validate: (v) => {
            return require('../../ultils/checkData').validateEmail(v)
        },message: props => `${props.value} email không đúng định dạng`

    },
    create_at: {
        type: Date,
        default: Date.now()
    },
    update_at: {
        type: Date
    }

})

module.exports = mongoose.model("User", userSchema)