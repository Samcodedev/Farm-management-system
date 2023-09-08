const asyncHandler = require('express-async-handler')
const stockModel = require('../Models/stockModels')


// Register a new stock
// Method: POST
// access: private
const registerStock = asyncHandler( async (req, res) =>{
    const {
        stockType,
        stockBreed,
        stockGroup,
        stockImage,
        stockAge,
        stockHealthStatus,
        stockHealthPercente,
        stockGeder,
        stockWeight,
        stockVerccineName,
        stockVerccineDueDate,
        stockCurrentLocation,
        stockLastVeterinarianCheck,
        stockLastVeterinarian,
        stockLastDiagnosis
    } = req.body
    if(
        !stockType ||
        !stockBreed ||
        !stockGroup ||
        !stockImage ||
        !stockAge ||
        !stockHealthStatus ||
        !stockHealthPercente ||
        !stockGeder ||
        !stockWeight ||
        !stockVerccineName ||
        !stockVerccineDueDate ||
        !stockCurrentLocation ||
        !stockLastVeterinarianCheck ||
        !stockLastVeterinarian ||
        !stockLastDiagnosis
    ){
        res.status(400)
        throw new Error('All input field are mandatary')
    }

    const stock = await stockModel.create({
        stockType,
        stockBreed,
        stockGroup,
        stockImage,
        stockAge,
        stockHealthStatus,
        stockHealthPercente,
        stockGeder,
        stockWeight,
        stockVerccineName,
        stockVerccineDueDate,
        stockCurrentLocation,
        stockLastVeterinarianCheck,
        stockLastVeterinarian,
        stockLastDiagnosis,
        userId: req.user
    })

    if(stock){
        res.status(200).json({
            _id: stock._id,
            stockType: stock.stockType,
            stockBreed: stock.stockBreed
        })
    }
    else{
        res.status(400)
        throw new Error('Stock data not valid')
    }
})


// Get all stock
// Method: POST
// access: private (but public to all users)
const getStock = asyncHandler( async (req, res) =>{
    const stock = await stockModel.find()
    res.status(200).json(stock)
})


// Update a specific stock
// Method: PUT
// access: private (can only be updated by the creator)
const updateStock = asyncHandler( async (req, res) =>{
    const stock = await stockModel.findById(req.params.id)
    if(!stock){
        res.status(404)
        throw new Error('stock not found')
    }
    if(stock.userId.toString() !== req.user._id){
        res.status(401)
        throw new Error('You do not have permission to update this stock')
    }
    const updateStock = await stockModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    res.status(200).json({updateStock})
})


// Get a particular stock
// Method: GET
// access: private (but public to all users)
const stockDetail = asyncHandler( async (req, res) =>{
    const stock = await stockModel.findById(req.params.id)
    if(!stock){
        res.status(404)
        throw new Error('stock not found')
    }
    res.status(200).json(stock)
})


// Delete a particular stock
// Method: DEL
// access: private
const deleteStock = asyncHandler( async (req, res) =>{
    const stock = await stockModel.findById(req.params.id)
    if(!stock){
        res.status(404)
        throw new Error('Stock not found')
    }
    if(stock.userId.toString() !== req.user._id){
        res.status(401)
        throw new Error('User not authorize to delete this stock')
    }
    const deleteStock = await stockModel.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteStock)
})

module.exports = {registerStock, getStock, updateStock, stockDetail, deleteStock}