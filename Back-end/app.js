const express = require('express')
const dotenv = require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(express.json())

app.use('/api/admin', require('./routes/userRoute'))

app.listen(port, ()=>{
    console.log(`listen from port ${port}`);
})