const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        require: [true, 'Please add Usernam']
    },
    userEmail: {
        type: String,
        require: [true, 'Please add Email']
    },
    userPhone: {
        type: String,
        require: [true, 'Please add phone']
    },
    userPassword: {
        type: String,
        require: [true, 'Please add password']
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('usersModel', userSchema)