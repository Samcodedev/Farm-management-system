import React from 'react'
import './Stocks.css'
import img from '../../Assets/animal-2.jpeg'
import {GiCow, GiHighGrass} from 'react-icons/gi'
import {FaUserDoctor} from 'react-icons/fa6'
import {MdManageAccounts, MdHealthAndSafety} from 'react-icons/md'

const Stocks = () => {
  return (
    <div className='stocks'>
      <div className="sub-stocks">
        <div className="cards">
            <div className="icon">
              <GiCow />
            </div>
            <p>Animals</p>
        </div>
        <div className="cards">
            <div className="icon">
              <FaUserDoctor />
            </div>
            <p>Vertinary</p>
        </div>
        <div className="cards">
            <div className="icon">
              <GiHighGrass />
            </div>
            <p>Feeding</p>
        </div>
        <div className="cards">
            <div className="icon">
              <MdManageAccounts />
            </div>
            <p>Management</p>
        </div>
        <div className="cards">
            <div className="icon">
              <MdHealthAndSafety />
            </div>
            <p>Health</p>
        </div>
      </div>
    </div>
  )
}

export default Stocks
