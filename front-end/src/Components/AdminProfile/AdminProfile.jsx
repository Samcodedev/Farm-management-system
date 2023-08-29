import React from 'react'
import './AdminProfile.css'
import img from '../Assets/dummy.png'
import {MdAddChart} from 'react-icons/md'

const AdminProfile = () => {
  return (
    <div className='AdminProfile'>
      <div className="sub-AdminProfile">
        <div className="profile">
          <div className="content">
            <h2>Obanla Samuel</h2>
            <h5>obanlasamuelolakunle@gmail.com</h5>
            <h5>+2349 067 925 333</h5>
          </div>
          <div className="img-div">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="cards">
            <MdAddChart />
            <div className="text">
              <h5>3</h5>
              <p>Stock created</p>
            </div>
          </div>
          <div className="cards">
            <MdAddChart />
            <div className="text">
              <h5>3</h5>
              <p>Stock created</p>
            </div>
          </div>
          <div className="cards">
            <MdAddChart />
            <div className="text">
              <h5>3</h5>
              <p>Stock created</p>
            </div>
          </div>
          <div className="cards">
            <MdAddChart />
            <div className="text">
              <h5>3</h5>
              <p>Stock created</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
