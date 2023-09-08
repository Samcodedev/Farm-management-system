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

    const st = JSON.stringify(stockData)

    const listStockData = {
        stockType: st.stockType,
        stockBreed: st.stockBreed,
        stockGroup: st.stockGroup,
        stockImage: st.stockImage,
        stockAge: st.stockAge,
        stockGeder: st.stockGeder,
        stockWeight: st.stockWeight,
        stockCurrentLocation: st.stockCurrentLocation,

        stockPrice,
        stockDescription,
        stockReview
    }

    // const toto = listStockData
    const listStock = await saleModels.create(listStockData)
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