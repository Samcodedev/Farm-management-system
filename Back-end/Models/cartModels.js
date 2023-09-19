const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    cartList: {
        type: String,
        require: [true, 'Please input the stock']
    },
    userId:{
        type: String,
        require: [true,'Please input the userId']
    }
    // stockType:{
    //     type: String,
    //     require: [true, 'Please input the stockType']
    // },
    // stockPrice:{
    //     type: String,
    //     require: [true, 'Please input the stockPrice']
    // },
    // stockQuality:{
    //     type: String,
    //     require: [true, 'Please input the stockQuality']
    // },
    // stockId:{
    //     type: String,
    //     require: [true, 'Please input the stockId']
    // },
    // stockPublisher:{
    //     type: String,
    //     require: [true, 'Please input the stockPublisher']
    // }

},
{
    timestamps: true
})

module.exports = mongoose.model('cartModels', Schema)