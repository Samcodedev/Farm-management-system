import React from 'react'
import './Service.css'
import img from '../../Assets/animal-2.jpeg'

const Service = () => {
  return (
    <div className='service'>
        <div className="sub-service">
            <div className="img-div">
                <img src={img} alt="anim" />
            </div>
            <div className="list">
                <div className="cards">
                    <div className="num">
                        1
                    </div>
                    <div className="text">
                        <h3>Manage Livestock</h3>
                        <p>we manage different lifestock both mammal and aqautic </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="num">
                        2
                    </div>
                    <div className="text">
                        <h3>Manage Livestock</h3>
                        <p>we manage different lifestock both mammal and aqautic </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="num">
                        3
                    </div>
                    <div className="text">
                        <h3>Manage Livestock</h3>
                        <p>we manage different lifestock both mammal and aqautic </p>
                    </div>
                </div>
                <div className="cards">
                    <div className="num">
                        4
                    </div>
                    <div className="text">
                        <h3>Manage Livestock</h3>
                        <p>we manage different lifestock both mammal and aqautic </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
