import React from 'react'
import './Header.css'
import img from '../../Assets/3a7bb851-d9be-492a-99e3-dbfb2feff4a2.jpeg.png'

const Header = () => {
  return (
    <div className='header'>
      <div className="sub-header">
        <div className="text-div">
          <h4>_Tosy farm limited</h4>
          <h1>Farm Management System</h1>
          <p>Lifestock Management system for different lifestock and animal datas for different animals in the farm both mammals, birds and aquatic animals with wild life animal.</p>
          <button className='but'>Visite lifestocks</button>
        </div>
        <div className="img-div">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header
