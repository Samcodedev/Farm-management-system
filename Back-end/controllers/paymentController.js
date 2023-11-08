const asyncHandler = require('express-async-handler')
const paymentModel = require('../Models/paymentModel')
const Flutterwave = require('flutterwave-node-v3')
const clientModels = require('../Models/clientModels')
const cartModels = require('../Models/cartModels')

const payment = asyncHandler(async (req, res)=>{
    const userId = req.user._id
    const ref = Math.floor(Math.random()*1000000+1)
    const mref = `rf${ref}`
    let {
        card_number,
        cvv,
        expiry_month,
        expiry_year,
        number
    } = req.body
    const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

    let cart = await cartModels.findOne({userId})
    if(cart){
        let products = cart.products
        let totalCost = 0

        for(let i=0; i<products.length; i++){
            totalCost += products[i].price
        }
        console.log(totalCost);
        if(totalCost > 100){
            let payload =  {
                card_number,
                cvv,
                expiry_month,
                expiry_year,
                currency: "NGN",
                amount: totalCost,
                redirect_url: "https://www.google.com",
                fullname: `${req.user.Name}`,
                email: req.user.Email,
                "phone_number": number,
                "enckey": process.env.FLW_ENCRYPTION_KEY,
                "tx_ref": mref
            
            }

            try{
                const response = await flw.Charge.card(payload)
                console.log(response);
            } 
            catch (error) {
                console.log(error.message)
                res.status(400)
                throw new Error('something goes wrong')
            }
    
        }
    }
})

module.exports = {payment}