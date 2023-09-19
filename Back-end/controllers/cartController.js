const asyncHandler = require('express-async-handler')
const stockModels = require('../Models/stockModels')
const cartModels = require('../Models/cartModels')

const addCart = asyncHandler( async (req, res) =>{
    const { productId, userId } = req.body
    const stockQuality = 1

    const stock = await stockModels.findById({productId})
    if(!stock){
        res.status(404)
        throw new Error('Stock not found')
    }
    const checkCart = await cartModels.findOne({userId})

    // check the cartlist array
    if(checkCart.cartList.stockId === productId){
        res.status(400)
        throw new Error('Stock already in cart')
    }

    const stockType = stock.stockType.toString()
    const stockPrice = stock.stockPrice.toString()
    const stockId = stock.stockId.toString()
    const stockPublisher = stock.stockPublisher.toString()

    const cartList = [
        {
            stockType,
            stockPrice,
            stockId,
            stockQuality,
            stockPublisher
        }
    ]

    const cart = await cartModels.create({
        cartList,
        userId
    })

    if(cart){
        res.status(200).json({cart})
    }
})

const updateCart = asyncHandler( async (req, res) =>{
    const cart = await cartModels.findById(req.params.id)
    
})

const getCart = asyncHandler( async (req, res) =>{
    
})

const deleteCart = asyncHandler( async (req, res) =>{
    
})

module.exports = {addCart, updateCart, getCart, deleteCart}