const asyncHandler = require('express-async-handler')
const stockModels = require('../Models/stockModels')
const stockProfileModel = require('../Models/stockProfileModel')

const savePicture = asyncHandler( async (req, res) =>{
    const stock = await stockModels.findById(req.params.id)
    if(!stock){
        res.status(404)
        throw new Error('Stock not found')
    }
    if(stock.userId.toString() !== req.user._id){
        res.status(400)
        throw new Error('User is not permitted to upload image')
    }
    const {
        image
    } = req.body
    const saveImageString = await stockProfileModel.create({image, stockId: req.params.id, userId: req.user._id})
    res.status(200).json(saveImageString)
})

// const getByFarmer = asyncHandler( async(req, res) =>{
//     const verifyFarmer = await stockProfileModel.find({userId: req.user._id})
//     if(!verifyFarmer){
//         res.status(404)
//         throw new Error('User not valid')
//     }
//     res.status(200).json(verifyFarmer)
// })

const getPicture = asyncHandler( async(req, res) =>{
    const verifyStock = await stockProfileModel.find({userId: req.user._id})
    // if(!verifyStock){
    //     res.status(404)
    //     throw new Error('stock has no picture')
    // }
    res.status(200).json(verifyStock)
})

const getAllPicture = asyncHandler( async(req, res) =>{
    const stockPictures = await stockProfileModel.find()
    if(!stockPictures){
        res.status(404)
        throw new Error('No stock picture')
    }
    res.status(200).json(stockPictures)
})

module.exports = {savePicture, getAllPicture, getPicture}