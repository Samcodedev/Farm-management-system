import React, { useState } from 'react'
import './AdminProfile.css'
import img from '../Assets/Farmer.jpg'
import { MdAddChart } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { RiLineChartLine } from 'react-icons/ri'
import { MdPlaylistRemove } from 'react-icons/md'

// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PieChartShaped from '../ReuseComponent/Charts/PieChartShaped'
import LineCharts from '../ReuseComponent/Charts/LineCharts'

const AdminProfile = () => {


const [chartActive, chartActiveFunc] = useState(0)



  return (
    <div className='AdminProfile'>
      <div className="sub-AdminProfile">
        <div className="details">
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
          <Row className="container">
            <Col className="cards" onClick={()=> chartActiveFunc(0)} 
              style={{
                backgroundColor: chartActive === 0? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <MdAddChart />
              </div>
              <div className="text">
                <h5>100</h5>
                <p>Stock created</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(1)}
              style={{
                backgroundColor: chartActive === 1? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <BsListCheck />
              </div>
              <div className="text">
                <h5>70</h5>
                <p>Stock listed</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(2)}
              style={{
                backgroundColor: chartActive === 2? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <RiLineChartLine />
              </div>
              <div className="text">
                <h5>8</h5>
                <p>Stock sold</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(3)}
              style={{
                backgroundColor: chartActive === 3? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <MdPlaylistRemove />
              </div>
              <div className="text">
                <h5>5</h5>
                <p>Stock motality</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="chat">
              <LineCharts />
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
