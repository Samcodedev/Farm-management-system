const mongoose = require('mongoose')

const stockPictureSchema = mongoose.Schema({
    stockId:{
        type: String,
        require: [true, 'Please add StockId']
    },
    image:{
        type: String,
        require: [true, 'Please add Image string']
    }
})

module.exports = mongoose.model('stockProfileModel', stockPictureSchema)