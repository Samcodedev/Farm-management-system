const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'usersmodels'
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
    stockHealthStatus:{
        type: String,
        require: [true, 'Please add Stock health status']
    },
    stockGeder:{
        type: String,
        require: [true, 'Please add Stock gender']
    }
},
{
    timestamps: true,
})

module.exports = mongoose.model('deathModel', Schema)