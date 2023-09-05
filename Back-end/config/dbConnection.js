const mongoose = require('mongoose')

// Connecting to the mongoose database
const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log(connect.connection.host);
    }
    catch(err){
        console.log(err);
        process.exit(1)
    }
}

module.exports = connectDB