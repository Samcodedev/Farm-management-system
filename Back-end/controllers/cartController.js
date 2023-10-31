const asyncHandler = require('express-async-handler')
const stockModels = require('../Models/stockModels')
const cartModels = require('../Models/cartModels')
const saleModel = require('../Models/saleModels')

const addCart = asyncHandler( async (req, res) =>{
    const { productId, quantity, name, price } = req.body;
    const userId = '64fd7c8eb8125296f2a62e7e'; // TODO: the logged in user id

    let stock = await saleModel.findById(productId)
    if(!stock){
        res.status(400)
        throw new Error('stock not found or not listed for sale')
    }

    let findUserCart = await cartModels.findOne({userId})
    if (findUserCart) {
        let cart = await cartModels.findOne({userId, products: { $elemMatch: { productId } } });
        if(!cart){
            // console.log(findUserCart)
            findUserCart.products.push({ productId, quantity, name, price });
            const cartUpdate = await cartModels.updateOne(findUserCart);
            return res.status(201).json(findUserCart);
        }
        else{
            let itemIndex = cart.products.findIndex(p => p.productId == productId);
            if (itemIndex > -1) {
                // product exists in the cart, update the quantity
                let productItem = cart.products[itemIndex];
                productItem.quantity = quantity;
                cart.products[itemIndex] = productItem;
            }
        
            console.log(cart);
            const cartUpdate = await cartModels.updateOne(cart);
            return res.status(201).json(cart);
        }
    }
    else{
        const newCart = await cartModels.create({ userId, products: [{ productId, quantity, name, price }] });
        res.status(200).json(newCart)
    }
})

const deleteCart = asyncHandler( async (req, res) =>{
    const userId = '64fd7c8eb8125296f2a62e7e'; // TODO: the logged in user id
    const productId = '65388e0dc3af090dca0a03bc'
    const cart = await cartModels.findOne({userId})
    if(!cart){
        res.status(400)
        throw new Error('You have nothing added to cart')
    }
    let product = await cartModels.findOne({ userId, products: { $elemMatch: {productId} } });

    // return res.status(201).json(product);
    if(product){
        // const cartUpdate = await cartModels.updateOne(cart);

        const filter = { userId };
        let update = { $pull: { products: { productId } } };

        const deleted = await cartModels.updateOne(filter, update);
        res.status(201).json(update);
    }
    else{
        res.status(400)
        throw new Error('cart not found')
    }
})

// 6537825ace976d494df7f171
// 653775dd16d3e2caa143b7d9
// 65388e0dc3af090dca0a03bc
// olonadetoyosi@gmail.com

module.exports = {addCart, deleteCart}