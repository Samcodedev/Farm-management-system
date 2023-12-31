const mongoose = require('mongoose')

const saleSchema = mongoose.Schema({
    userId:{
        type: String,
        require: [true, 'Please add UserId']
    },
    userName:{
        type: String,
        require: [true, 'Please add User Name']
    },
    userEmail:{
        type: String,
        require: [true, 'Please add User Email']
    },
    userPhone:{
        type: String,
        require: [true, 'Please add User Phone']
    },
    stockCategories:{
        type: String,
        require: [true, 'Please add Stock type']
    },
    stockBreed:{
        type: String,
        require: [true, 'Please add Stock breed']
    },
    stockGroup:{
        type: String,
        require: [true, 'Please add Stock group']
    },
    stockImage:{
        type: String,
        require: [true, 'Please add Stock image']
    },
    stockAge:{
        type: String,
        require: [true, 'Please add Stock age']
    },
    stockGeder:{
        type: String,
        require: [true, 'Please add Stock gender']
    },
    stockWeight:{
        type: String,
        require: [true, 'Please add Stock weight']
    },
    stockCurrentLocation:{
        type: String,
        require: [true, 'Please add Stock current location']
    },

    stockPrice:{
        type: String,
        require: [true, 'Please add a Stock price']
    },
    stockDescription:{
        type: String,
        require: [true, 'Please add a Stock description']
    },
    stockReview:{
        type: String,
        require: [true, 'Please add a Stock price']
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('saleModel', saleSchema)