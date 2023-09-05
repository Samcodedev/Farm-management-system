const asyncHandler = require('express-async-handler')
const stockModel = require('../Models/stockModels')

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
        stockLastDiagnosis
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








const getStock = asyncHandler( async (req, res) =>{
    const stock = await stockModel.find()
    res.status(200).json(stock)
})

const updateStock = asyncHandler( async (req, res) =>{
    const stock = await stockModel.findById(req.params.id)
    if(!stock){
        res.status(404)
        throw new Error('stock not found')
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

const stockDetail = asyncHandler( async (req, res) =>{
    const stock = await stockModel.findById(req.params.id)
    if(!stock){
        res.status(404)
        throw new Error('stock not found')
    }
    res.status(200).json(stock)
})

module.exports = {registerStock, getStock, updateStock, stockDetail}