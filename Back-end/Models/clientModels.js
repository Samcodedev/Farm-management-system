const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'Please input client Name']
    },
    email:{
        type: String,
        require: [true, 'Please input Client Email'],
        unique: [true, 'Email address already taken']
    },
    phone:{
        type: String,
        require: [true, 'Please input Client Phone']
    },
    password:{
        type: String,
        require: [true, 'Please input Client Password']
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

module.exports = mongoose.model('clientModels', Schema)