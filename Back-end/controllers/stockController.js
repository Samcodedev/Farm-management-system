const asyncHandler = require('express-async-handler')
const stockModel = require('../Models/stockModels')
const userModels = require('../Models/userModels')
const fs = require("fs")
const cloudinary = require("../utils/cloudinary")


// Register a new stock
// Method: POST
// access: private
const registerStock = asyncHandler( async (req, res) =>{
 
    const {
            stockCategories,
            stockBreed,
            stockGroup,
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

        stockVeterinarian,
        stockColor,
    } = req.body
    const file = req.file
    if(!file){
        
        throw new Error('All input field are mandatary') 
    }
    // if(
    //     !stockCategories ||
    //     !stockBreed ||
    //     !stockGroup ||
    //     !stockAge ||
    //     !stockHealthStatus ||
    //     !stockHealthPercente ||
    //     !stockGeder ||
    //     !stockWeight ||
    //     !stockVerccineName ||
    //     !stockVerccineDueDate ||
    //     !stockCurrentLocation ||
    //     !stockLastVeterinarianCheck ||
    //     !stockLastVeterinarian ||
    //     !stockLastDiagnosis ||
    //     !stockVeterinarian ||
    //     !stockColor
    // ){
    //     res.status(400)
    //     throw new Error('All input field are mandatary')
    // }
   
    const uploader = async (path) => await cloudinary.uploads(path , 'coursecontent')
    
    let url;
 
   
    
    const {path} = file
    
    const newPath = await uploader(path)
    
    url = newPath.url
    
    
    fs.unlinkSync(path)
   
    if(req.user.role === 'farmer' || req.user.role === 'admin'){

        console.log(req.body, file);

        const uploader = async (path) => await cloudinary.uploads(path , 'farm-management-animal-picture')
    
        let url;
        const {path} = file
        const newPath = await uploader(path)
        url = newPath.url
        
        
        fs.unlinkSync(path)
        
        
        const stock = await stockModel.create({
            stockCategories,
            stockBreed,
            stockGroup,
            stockImage:url.toString(),
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

            stockVeterinarian,
            stockColor,
            userId: req.user
        })
    
        if(stock){
            res.status(200).json({
                _id: stock._id,
                stockCategories: stock.stockCategories,
                stockBreed: stock.stockBreed,
                stockImage:stock.stockImage
            })
        }
        else{
            res.status(400)
            throw new Error('Stock data not valid')
        }
    }
    else{
        res.status(401)
        throw new Error('user do not have permission to create stock')
    }
})


// Get all stock GET
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
    if(req.user.role === 'farmer' || req.user.role === 'admin'){
        if(stock.userId.toString() !== req.user._id){
            res.status(401)
            throw new Error('You do not have permission to update this stock')
        }
        if(!req.body){
            throw new Error('No data is been updated')
        }


        console.log('working');
        cloudinary.config({ 
            cloud_name: 'farm-management-system', 
            api_key: '118842453864288', 
            api_secret: process.env.FLW_SECRET_KEY,
            secure: true
        });

        // Upload an image
        let response
        cloudinary.uploader.upload(`${stockImage}`, (error, result) => {
            if (error) {
            console.error(error);
            return;
            }
            console.log(result.secure_url);
            response = result.secure_url
        });

        const updateStock = await stockModel.findByIdAndUpdate(
            req.params.id,
            {
                stockCategories,
                stockBreed,
                stockGroup,
                stockImage: response,
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

                stockVeterinarian,
                stockColor
            },
            {
                new: true
            }
        )
    
        res.status(200).json({updateStock})
    }
    else{
        res.status(401)
        throw new Error('You do not have permission to update this stock')
    }
    
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