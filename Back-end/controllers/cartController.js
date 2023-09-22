const asyncHandler = require('express-async-handler')
const stockModels = require('../Models/stockModels')
const cartModels = require('../Models/cartModels')

const addCart = asyncHandler( async (req, res) =>{
    const user = req.user._id
    let productId = req.params.id

    const stock = await stockModels.findById(productId)
    // res.status(200).json(stock)
    
    if(!stock){
        res.status(404)
        throw new Error('stock not found')
    }

    const cart = await cartModels.findOne({user})
    if(cart){
        const index = await cartModels.stock.findOne(productId)
        if(index > 0){
            res.status(400)
            throw new Error('Stock already in cart')
        }
        cartModels.stock.push({
            stockId: productId,
            stockType: stock.stockType,
            // price, this should be gotten from listed stock
        })
    }
    const index = await stockModels.findOne(productId)
    const creatCart = await cartModels.create({
        stock:[{
            stockId: productId,
            stockType: index.stockType,
        }]
    })

    res.status(200).json(creatCart)
})

const getCart = asyncHandler( async (req, res) =>{
    const user = req.user.Name
    const cart = await cartModels.findOne(user)
    if(!cart){
        res.status(400)
        throw new Error('User not authorise')
    }
    res.status(200).json(cart)
})

const deleteCart = asyncHandler( async (req, res) =>{
    
})

module.exports = {addCart, getCart, deleteCart}