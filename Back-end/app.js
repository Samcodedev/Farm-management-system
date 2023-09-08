const express = require('express')
const handleError = require('./middleware/errorHandling')
const connectDB = require('./config/dbConnection')
const dotenv = require('dotenv').config()

connectDB()

const app = express()
const port = process.env.PORT

// setting the response format to JSON format
app.use(express.json())

// sets of data routes wish are the USER and STOCK
app.use('/api/admin', require('./routes/userRoute'))
app.use('/api/stock', require('./routes/stockRoute'))
app.use('/api/sale', require('./routes/saleRoute'))
app.use(handleError)

app.listen(port, ()=>{
    console.log(`listen from port ${port}`);
})

// samcode-farm-management-system