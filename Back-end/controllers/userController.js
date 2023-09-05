const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const userModels = require('../Models/userModels')
const jwt = require('jsonwebtoken')
const stockModel = require('../Models/stockModels')

const registerAdmin = asyncHandler(async (req, res)=>{
    const {name, email, phone, password} = req.body
    if(!name || !email || !phone || !password){
        res.status(400)
        throw new Error('All input field are mandatory')
    }

    const userAuthentication = await userModels.findOne({email})
    if(userAuthentication){
        res.status('400')
        throw new Error('User already exist')
    }

    const hashpassword = await bcrypt.hash(password, 10)

    const user = await userModels.create({
        userName: name,
        userEmail: email,
        userPhone: phone,
        userPassword: hashpassword
    })

    if(user){
        res.status(200).json({
            _id: user._id,
            Phone: user.userPhone,
            Email: user.userEmail
        })
    }
    else{
        res.status(400)
        throw new Error('User data not valid')
    }
})

const loginAdmin = asyncHandler( async (req, res)=>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('All input field are mandatory')
    }

    const user = await userModels.findOne({userEmail: email})
    
    if(user && (await bcrypt.compare(password, user.userPassword))){
        const accessToken = jwt.sign({
            user:{
                _id: user._id,
                Name: user.userName,
                Email: user.userEmail,
                Phone: user.userPhone,
                createdAT: user.createdAt,
                updatedAt: user.updatedAt
            }
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: '20min'}
        )

        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error('Email and Password not valid')
    }
}

)

const getAdmin = asyncHandler( async (req, res)=>{
    if(req.user){
        const getCreatedStock = await stockModel.find({userId: req.user._id})
        const stocks = []
        getCreatedStock.map((item) =>{
            stocks.push(item._id)
        })
        
        const {_id, Name, Email, Phone, createdAT, updatedAt } = req.user
        const response = {
            _id,
            Name,
            Email,
            Phone,
            createdAT,
            updatedAt,
            stockCreated: {
                totalStock: getCreatedStock.length,
                stocksId: stocks
            }
            
        }
        res.status(200).json(response)
    }
    res.status(401)
    throw new Error('unauthotized')
})

module.exports = {getAdmin, registerAdmin, loginAdmin}


/*
{
    "name": "obanla samuel",
    "email": "obanlasamuelolakunle@gmail.com",
    "phone": "09067925333",
    "password": "samuel.0406"
}

{
    "name": "olonade toyosi",
    "email": "olonadetoyosi@gmail.com",
    "phone": "123456789",
    "password": "password"
}
*/