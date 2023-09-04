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








const getStock = (req, res) =>{
    res.status(200).json({message: "get stock working"})
}

const updateStock = (req, res) =>{
    res.status(200).json({message: "update stock working"})
}

const stockDetail = (req, res) =>{
    res.status(200).json({message: "stock details working"})
}

module.exports = {registerStock, getStock, updateStock, stockDetail}