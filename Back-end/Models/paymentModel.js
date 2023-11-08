const mongoose = require('mongoose')

const mongooseSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        require: true,
        ref: 'usersmodels'
    },
    stock:{
        type: Array
    },
    bill:{
        type: Array
    }
},{
    timestamps:true
})

mongoose.exports = mongoose.model('paymentModel', mongooseSchema)