const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')

const validateToken = asyncHandler( async (req, res, next) =>{
    let token;
    const Header = req.headers.Authorization || req.headers.authorization
    if(Header && Header.startsWith('Bearer')){
        token = Header.split(' ')[1]
        jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) =>{
            if(err){
                res.status(401)
                throw new Error('User is not authorise')
            }
            req.user = decoded.user
            next()
        })
    }
    if(!token){
        res.status(401)
        throw new Error('User is not authorized or token is missing')
    }
})

module.exports = validateToken