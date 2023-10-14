import React from 'react'
import './StockProfile.css'
import img from '../Assets/dummy.png'
import farmer from '../Assets/Farmer.jpg'

// import Table from 'react-bootstrap/esm/Table'
import { useLocation, Link } from 'react-router-dom'

const StockProfile = () => {
    const data = useLocation().state
    console.log(data.state);
  return (
    <div className='StockProfile'>
        <div className="sub-StockProfile">
            <div className="farmer">
                <div className="img-div">
                    <img src={farmer} alt="farmer" />
                </div>
                <div className="text-div">
                    <h4>Farmer: <span>Samuel Obanla</span></h4>
                    <h4>Veterinarian: <span>{data.stockVeterinarian}</span></h4>
                    <Link to='/UpdateStock' state={data._id}><button>Update Stock</button></Link>
                </div>
            </div>
            <div className="stock">
                <div className="img-div">
                    <img src={img} alt="stock" />
                </div>
                <div className="text-div">
                    <div className="box">
                        <h3>Stock Type</h3>
                        <p>{data.stockCategories}</p>
                    </div>
                    <div className="box">
                        <h3>Stock Breed</h3>
                        <p>{data.stockBreed}</p>
                    </div>
                    <div className="box">
                        <h3>Stock Group</h3>
                        <p>{data.stockGroup}</p>
                    </div>
                    <div className="box">
                        <h3>Stock Age</h3>
                        <p>{data.stockAge}</p>
                    </div>
                    <div className="box">
                        <h3>Stock Health Status</h3>
                        <p>{data.stockHealthStatus}</p>
                    </div>
                    <div className="box">
                        <h3>Stock Weight</h3>
                        <p>{data.stockWeight}kg</p>
                    </div>
                    <div className="box">
                        <h3>Stock Gender</h3>
                        <p>{data.stockGeder}</p>
                    </div>
                    <div className="box">
                        <h3>Stock Current Location</h3>
                        <p>{data.stockCurrentLocation}</p>
                    </div>
                    <div className="box">
                        <h3>Last Veterinarian Check</h3>
                        <p>{data.stockLastVeterinarianCheck}</p>
                    </div>
                    <div className="box">
                        <h3>Last Diagnosis</h3>
                        <p>{data.stockLastDiagnosis}</p>
                    </div>
                    <div className="box">
                        <h3>Verccine Name</h3>
                        <p>{data.stockVerccineName}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StockProfile
