import React from 'react'
import './StockProfile.css'
import img from '../Assets/dummy.png'

import Table from 'react-bootstrap/esm/Table'

const StockProfile = () => {
  return (
    <div className='StockProfile'>
        <div className="sub-StockProfile">
            <div className="farmer">
                <div className="img-div">
                    <img src={img} alt="farmer" />
                </div>
                <div className="text-div">
                    <h4>Farmer: <span>Samuel Obanla</span></h4>
                    <h4>Veterinarian: <span>Gbogunmi</span></h4>
                </div>
            </div>
            <div className="stock">
                <div className="img-div">
                    <img src={img} alt="stock" />
                </div>
                <div className="text-div">
                    <div className="box">
                        <h3>Stock Type</h3>
                        <p>Goat</p>
                    </div>
                    <div className="box">
                        <h3>Stock Breed</h3>
                        <p>He-Goat</p>
                    </div>
                    <div className="box">
                        <h3>Stock Group</h3>
                        <p>Group 001</p>
                    </div>
                    <div className="box">
                        <h3>Stock Age</h3>
                        <p>3 months</p>
                    </div>
                    <div className="box">
                        <h3>Stock Health Status</h3>
                        <p>Active</p>
                    </div>
                    <div className="box">
                        <h3>Stock Weight</h3>
                        <p>100kg</p>
                    </div>
                    <div className="box">
                        <h3>Stock Gender</h3>
                        <p>Male</p>
                    </div>
                    <div className="box">
                        <h3>Stock Current Location</h3>
                        <p>East Farm</p>
                    </div>
                    <div className="box">
                        <h3>Last Veterinarian Check</h3>
                        <p>30-07-23</p>
                    </div>
                    <div className="box">
                        <h3>Last Diagnosis</h3>
                        <p>30-07-23</p>
                    </div>
                    <div className="box">
                        <h3>Verccine Name</h3>
                        <p>Mawu mawu</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StockProfile
