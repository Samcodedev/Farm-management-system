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
    const saveImageString = await stockProfileModel.create({image, stockId: req.params.id})
    res.status(200).json(saveImageString)
})

const getPicture = asyncHandler( async(req, res) =>{
    const verifyStock = await stockProfileModel.findOne({stockId: req.params.id})
    if(!verifyStock){
        res.status(404)
        throw new Error('stock has no picture')
    }
    res.status(200).json(verifyStock)
})

module.exports = {savePicture, getPicture}