const mongoose = require('mongoose')

const pictureSchema = mongoose.Schema({
    userId:{
        type: String,
        require: [true, 'Please add UserId']
    },
    image:{
        type: String,
        require: [true, 'Please add Image string']
    }
})

module.exports = mongoose.model('profileModel', pictureSchema)