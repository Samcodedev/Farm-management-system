const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const userModels = require('../Models/userModels')
const jwt = require('jsonwebtoken')
const stockModel = require('../Models/stockModels')
const nodemailer = require('nodemailer')

// Register a new user
// Method: POST
// access: public
const registerAdmin = asyncHandler(async (req, res)=>{
    const {name, email, phone, password} = req.body
    if(!name || !email || !phone || !password){
        res.status(400)
        throw new Error('All input field are mandatory')
    }

    const userAuthentication = await userModels.findOne({email})
    if(userAuthentication){
        res.status(400)
        throw new Error('User already exist')
    }

    const hashpassword = await bcrypt.hash(password, 10)

    const user = await userModels.create({
        userName: name,
        userEmail: email,
        userPhone: phone,
        userPassword: hashpassword,
        role: 'farmer'
    })

    if(user){
        res.status(200).json({
            _id: user._id,
            Phone: user.userPhone,
            Email: user.userEmail,
            Role: user.role
        })
    }
    else{
        res.status(400)
        throw new Error('User data not valid')
    }
})


// Login a  user
// Method: POST
// access: public
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
                updatedAt: user.updatedAt,
                role: user.role
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


// Get user
// Method: GET
// access: private
const getAdmin = asyncHandler( async (req, res)=>{
    if(req.user){
        const getCreatedStock = await stockModel.find({userId: req.user._id})
        const stocks = []
        getCreatedStock.map((item) =>{
            stocks.push(item._id)
        })
        
        const { _id, Name, Email, Phone, createdAT, updatedAt, role } = req.user
        const response = {
            _id,
            Name,
            Email,
            Phone,
            createdAT,
            updatedAt,
            role,
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

const forgetPassword = asyncHandler( async (req, res, next) =>{
    const { email } = req.body
    const userAuthentication = await userModels.findOne({userEmail: email})
    if(!userAuthentication){
        res.status(404)
        throw new Error('User not found')
    }
    const accessToken = jwt.sign({
        email: {
            email
        }
    },
    process.env.ACCESS_TOKEN_SECERT,
    {expiresIn: '10min'}
    )

    res.status(200).json({accessToken})

    // const transporter = nodemailer.createTransport({
    //   host: "obanlasamuelolakunle@gmail.com",
    //   port: 465,
    //   secure: true,
    // service: "gmail",
    //   auth: {
    //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    //     user: "obanlasamuelolakunle@gmail.com",
    //     pass: "Samuel.0406",
    //   },
    // });

    // const info = await transporter.sendMail({
    //     from: 'obanlasamuelolakunle@gmail.com', // sender address
    //     to: email, // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });

    //   transporter.sendMail(info, (err) =>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         console.log('email sent');
    //     }
    //   })
    
    //   console.log(info.messageId);
    //   res.status(200).json({Messages: info.messageId})

})

const resetPassword = asyncHandler( async (req, res) =>{
    const { password } = req.body
    const userAuthentication = await userModels.findById()
})

module.exports = {getAdmin, registerAdmin, loginAdmin, forgetPassword, resetPassword}


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