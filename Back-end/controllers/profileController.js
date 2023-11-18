const asyncHandler = require('express-async-handler')
const clientModels = require('../Models/clientModels')
const userModels = require('../Models/userModels')
const ProfileModel = require('../Models/ProfileModel')

const savePicture = asyncHandler( async (req, res) =>{
    const client = await clientModels.findById(req.params.id)
    const user = await userModels.findById(req.params.id)
    const {
        image
    } = req.body

    console.log('working 1');
    if(!client && !user){
        res.status(404);
        throw new Error('Unauthorized user')
    }
    const checkUser = await ProfileModel.findOne({userId: req.user._id})
    if(checkUser){
        const updateImage = await ProfileModel.findOneAndUpdate(
            {userId: req.user._id},
            req.body,
            {
                new: true
            }
        )
        res.status(200).json(updateImage)
        // throw new Error('You already have a profile picture')
    }
    console.log('working 2');
    if(req.user._id.toString() !==  req.params.id){
        res.status(400)
        throw new Error("something sent wrong")
    }
    console.log('working 3');
    
    
    console.log('working 4');
    const saveImageString = await ProfileModel.create({image, userId: req.user._id})
    res.status(200).json(saveImageString)
})

const getPicture = asyncHandler( async (req, res) =>{
    const verifyUser = await ProfileModel.findOne({userId: req.user._id})
    if(!verifyUser){
        res.status(404)
        throw new Error('Upload profile Image')
    }
    res.status(200).json(verifyUser)
})

module.exports = {savePicture, getPicture}