const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'usersmodels'
    },
    stockType:{
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
    stockHealthPercente:{
        type: String,
        require: [true, 'Please add Stock health percente']
    },
    stockGeder:{
        type: String,
        require: [true, 'Please add Stock gender']
    },
    stockWeight:{
        type: String,
        require: [true, 'Please add Stock weight']
    },
    stockVerccineName:{
        type: String,
        require: [true, 'Please add Stock verccine name']
    },
    stockVerccineDueDate:{
        type: String,
        require: [true, 'Please add Stock verccine due date']
    },
    stockCurrentLocation:{
        type: String,
        require: [true, 'Please add Stock current location']
    },
    stockLastVeterinarianCheck:{
        type: String,
        require: [true, 'Please add Stock last veterinarian check']
    },
    stockLastVeterinarian:{
        type: String,
        require: [true, 'Please add Stock last veterinarian']
    },
    stockLastDiagnosis:{
        type: String,
        require: [true, 'Please add Stock last diagnosis']
    }
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('stockModel', Schema)



/*
{
    "stockType": "Goat",
    "stockBreed": "HeGoat",
    "stockGroup": "001",
    "stockImage": "goat.png",
    "stockAge": "3months",
    "stockHealthStatus": "healthy",
    "stockHealthPercente": "80",
    "stockGeder": "male",
    "stockWeight": "100kg",
    "stockVerccineName": "mawu mawu",
    "stockVerccineDueDate": "10-09-23",
    "stockCurrentLocation": "east farm",
    "stockLastVeterinarianCheck": "01-09-23",
    "stockLastVeterinarian": "Adeola",
    "stockLastDiagnosis": "Active and in good health condition"
}
*/