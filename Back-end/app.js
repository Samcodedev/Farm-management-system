const express = require('express')
const handleError = require('./middleware/errorHandling')
const connectDB = require('./config/dbConnection')
const dotenv = require('dotenv').config()

connectDB()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/admin', require('./routes/userRoute'))
app.use('/api/stock', require('./routes/stockRoute'))
app.use(handleError)

app.listen(port, ()=>{
    console.log(`listen from port ${port}`);
})

// samcode-farm-management-system