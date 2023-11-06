const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const clientModels = require('../Models/clientModels')
const cartModels = require('../Models/cartModels')

const registerClient = asyncHandler( async (req, res) =>{
    const {name, email, phone, password} = req.body
    if(!name || !email || !phone || !password){
        res.status(400)
        throw new Error('All input field are mandatory')
    }

    const clientAuthorize = await clientModels.findOne({email})
    if(clientAuthorize){
        res.status(400)
        throw new Error('User already have an account')
    }

    const hashpassword = await bcrypt.hash(password, 10)
    const client = await clientModels.create(
        {
            name, 
            email, 
            phone, 
            password: hashpassword,
            role: 'client'
        })
    
    if(client){
        res.status(200).json({
            _id: client._id,
            phone: client.phone,
            email: client.email,
            role: client.role
        })
    }
    else{
        res.status(400)
        throw new Error('User data not valid')
    }
})

const loginClient = asyncHandler( async (req, res) =>{
    const {email, password} = req.body
    if(!email || !password){
        res.status(400)
        throw new Error('All input field are mandatory')
    }

    const client = await clientModels.findOne({email})

    if(client && (await bcrypt.compare(password, client.password))){
        const accessToken = jwt.sign({
            user:{
                _id: client._id,
                Name: client.name,
                Email: client.email,
                Phone: client.phone,
                createdAT: client.createdAt,
                updatedAt: client.updatedAt,
                role: client.role
            }
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: '30min'}
        )

        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error('Email and Password not valid')
    }
})

const getClient = asyncHandler( async (req, res) =>{
    if(req.user){
        const { _id, Name, Email, Phone, createdAT, updatedAt, role } = req.user
        const userId = _id
        const cart = await cartModels.findOne({userId})
        
        res.status(200).json({
            _id,
            Name,
            Email,
            Phone,
            createdAT,
            updatedAt,
            role,
            cart: {
                totalCart: cart.length,
                cart: cart
            }
        })
    }
})

/*
{
    "name": "femi anikolapo",
    "email": "femianikolapo@gmail.com",
    "phone": "123456789",
    "password": "password"
}
*/

module.exports = {registerClient, loginClient, getClient}