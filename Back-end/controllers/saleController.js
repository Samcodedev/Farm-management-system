const asyncHandler = require('express-async-handler')
const stockModel = require('../Models/stockModels')
const saleModels = require('../Models/saleModels')


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

    const {
        stockPrice,
        stockDescription,
        stockReview
    } = req.body

    if(!stockPrice || !stockDescription || !stockReview){
        res.status(400)
        throw new Error('All input field are mandatary')
    }



    const stockData = {
        stockType: stock.stockType,
        stockBreed: stock.stockBreed,
        stockGroup: stock.stockGroup,
        stockImage: stock.stockImage,
        stockAge: stock.stockAge,
        stockGeder: stock.stockGeder,
        stockWeight: stock.stockWeight,
        stockCurrentLocation: stock.stockCurrentLocation
    }

    // trying to convert STOCKDATA to string
    const stringData = JSON.stringify(stockData)


    const listStock = await saleModels.create({
        stockType: stringData.stockType,
        stockBreed: stringData.stockBreed,
        stockGroup: stringData.stockGroup,
        stockImage: stringData.stockImage,
        stockAge: stringData.stockAge,
        stockGeder: stringData.stockGeder,
        stockWeight: stringData.stockWeight,
        stockCurrentLocation: stringData.stockCurrentLocation,

        stockPrice,
        stockDescription,
        stockReview
    })
    if(listStock){
        res.status(200).json({
            stockType,
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

})


module.exports = {listStock, updateListedStock, getListedStock}