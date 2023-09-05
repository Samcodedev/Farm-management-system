const {constant} = require('../constant')
 
// Handling all errors by displaying it in a json format
const handleError = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500

    if(statusCode === constant.VALIDATION_ERROR){
        res.json({
            title: 'Validation Error',
            status: constant.VALIDATION_ERROR,
            message: err.message,
            location: err.stack
        })
    }
    else if(statusCode === constant.UNAUTHORIZED){
        res.json({
            title: 'Unauthorized',
            status: constant.UNAUTHORIZED,
            message: err.message,
            location: err.stack
        })
    }
    else if(statusCode === constant.FORBIDDEN){
        res.json({
            title: 'Forbidden',
            status: constant.FORBIDDEN,
            message: err.message,
            location: err.stack
        })
    }
    else if(statusCode === constant.NOT_FOUND){
        res.json({
            title: 'Not found',
            status: constant.NOT_FOUND,
            message: err.message,
            location: err.stack
        })
    }
    else if(statusCode === constant.SERVER_ERROR){
        res.json({
            title: 'Server error',
            status: constant.SERVER_ERROR,
            message: err.message,
            location: err.stack
        })
    }
}

module.exports = handleError