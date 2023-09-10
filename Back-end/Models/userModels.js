const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: [true, 'Please add Usernam']
    },
    userEmail: {
        type: String,
        require: [true, 'Please add Email'],
        unique: [true, 'Email address already taken']
    },
    userPhone: {
        type: String,
        require: [true, 'Please add phone'],
        unique: [true, 'Email address already taken']
    },
    userPassword: {
        type: String,
        require: [true, 'Please add password']
    },
    role: {
        type: String,
        require: [true, 'Please input role']
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('usersModel', userSchema)