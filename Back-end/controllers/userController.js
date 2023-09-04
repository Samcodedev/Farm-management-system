const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const userModels = require('../Models/userModels')
const jwt = require('jsonwebtoken')

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
        console.log({
            Name: name,
            Email: email,
            Phone: phone
        });
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
                Phone: user.userPhone
            }
        },
        process.env.ACCESS_TOKEN_SECERT,
        {expiresIn: '15min'}
        )

        res.status(200).json({accessToken})
    }
    else{
        res.status(401)
        throw new Error('Email and Password not valid')
    }
}

)

const getAdmin = (req, res)=>{
    res.status(200).json({meaasge: "requesting to get admin"})
    console.log('get Admin');
}

module.exports = {getAdmin, registerAdmin, loginAdmin}


// {
//     "name": "samuel",
//     "email": "sam@gmail",
//     "phone": "09067925333",
//     "password": "samuel"
//   }