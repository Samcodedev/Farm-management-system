const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    user:{
        type: mongoose.Schema.ObjectId,
        ref: 'usersmodels'
    },
    stock:[{
        stockId:{
            type: String,
            require: [true, 'Please input the stockId']
        },
        stockType:{
            type: String,
            require: [true, 'Please input the stockType']
        },
        stockPrice:{
            type:Number,
            require: [true, 'Please input the stockPrice']
        },
    }],
    bill:{
        type:Number,
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('cartModels', Schema)