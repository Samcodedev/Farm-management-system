const asyncHandler = require('express-async-handler')
const stockModel = require('../Models/stockModels')
const saleModels = require('../Models/saleModels')
const userModels = require('../Models/userModels')


const listStock = asyncHandler( async (req, res) =>{
    const stock = await stockModel.findById(req.params.id)

    if(!stock){
        res.status(404)
        throw new Error('stock not found')
    }
    if(stock.userId.toString() !== req.user._id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const farmer = await userModels.findById(req.user._id)
    const {
        userName,
        userEmail,
        userPhone
    } = farmer

    const {
        stockPrice,
        stockDescription,
        stockReview
    } = req.body

    if(!stockPrice || !stockDescription || !stockReview){
        res.status(400)
        throw new Error('All input field are mandatary')
    }
    // console.log('string', stringData)



    const {
        stockCategories,
        stockBreed,
        stockGroup,
        stockImage,
        stockAge,
        stockGeder,
        stockWeight,
        stockCurrentLocation
    } = stock


    const listStock = await saleModels.create({
        stockCategories,
        stockBreed,
        stockGroup,
        stockImage,
        stockAge,
        stockGeder,
        stockWeight,
        stockCurrentLocation,

        stockPrice,
        stockDescription,
        stockReview,
        
        userName,
        userEmail,
        userPhone
    })
    if(listStock){
        res.status(200).json({
            stockCategories,
            stockBreed,
            stockPrice
        })
    }
    else{
        res.status(400)
        throw new Error('Stock data not valid')
    }
})

const updateListedStock = asyncHandler(async (req, res) =>{

})

const getListedStock = asyncHandler(async (req, res) =>{
    const listedStock = await saleModels.find()
    res.status(200).json(listedStock)
})


module.exports = {listStock, updateListedStock, getListedStock}