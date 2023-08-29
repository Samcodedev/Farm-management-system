
const registerAdmin = (req, res)=>{
    const {name} = req.body
    res.status(200).json(`${name} has been created`)
    console.log(`${req} has been created`);
}

const loginAdmin = (req, res)=>{
    const {name} = req.body
    res.status(200).json(`${name} just login`)
    console.log(`${req} just login`);
}

const getAdmin = (req, res)=>{
    res.status(200).json({meaasge: "requesting to get admin"})
    console.log('get Admin');
}

module.exports = {getAdmin, registerAdmin, loginAdmin}