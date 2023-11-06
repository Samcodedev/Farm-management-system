const asyncHandler = require('express-async-handler')
const stockModels = require('../Models/stockModels')
const cartModels = require('../Models/cartModels')
const saleModel = require('../Models/saleModels')

const addCart = asyncHandler( async (req, res) =>{
    const { productId, quantity, name, price } = req.body;
    const {_id} = req.user
    const userId = _id;

    if(!userId){
        res.status(401)
        throw new Error('User not logged in')
    }

    let stock = await saleModel.findById(productId)
    if(!stock){
        res.status(404)
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
        let addProduct = []
        addProduct.push({ productId, quantity, name, price })
        console.log({userId, products: addProduct});
        const newCart = await cartModels.create( {userId, products: addProduct} );
        console.log(newCart);
        res.status(200).json(newCart)
    }
})

const deleteCart = asyncHandler( async (req, res) =>{
    const {_id} = req.user
    const {productId} = req.body
    const userId = _id; 

    const cart = await cartModels.findOne({userId})
    if(!cart){
        res.status(404)
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
        res.status(404)
        throw new Error('cart not found')
    }
})

const getCart = asyncHandler( async (req, res) =>{
    const {_id} = req.user
    const userId =_id
    const cart = await cartModels.findOne({userId})
    if(cart){
        res.status(200).json(cart)
    }
    else{
        res.status(400)
        throw new Error('Cart is empty')
    }
})
// 65388e0dc3af090dca0a03bc
// olonadetoyosi@gmail.com

module.exports = {addCart, deleteCart, getCart}