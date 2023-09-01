import React, { useState } from 'react'
import './AdminProfile.css'
import img from '../Assets/dummy.png'
import { MdAddChart } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { RiLineChartLine } from 'react-icons/ri'
import { MdPlaylistRemove } from 'react-icons/md'

// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PieChartShaped from '../ReuseComponent/Charts/PieChartShaped'

const AdminProfile = () => {


const [chartActive, chartActiveFunc] = useState(0)


const data = [
  { name: 'stock listed', value: 300 },
  { name: 'stock sold', value: 300 },
  { name: 'stock unlisted', value: 200 },
];

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
            <Col className="cards" onClick={()=> chartActiveFunc(0)} >
              <div className="icon">
                <MdAddChart />
              </div>
              <div className="text">
                <h5>{chartActive}</h5>
                <p>Stock created</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(1)}
              style={{
                backgroundColor: chartActive === 0? '#6bbb96' : 'cadetblue'
              }}>
              <div className="icon">
                <BsListCheck />
              </div>
              <div className="text">
                <h5>30</h5>
                <p>Stock listed</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(2)}
              style={{
                backgroundColor: chartActive === 1? '#6bbb96' : 'cadetblue'
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
                backgroundColor: chartActive === 2? '#6bbb96' : 'cadetblue'
              }}>
              <div className="icon">
                <MdPlaylistRemove />
              </div>
              <div className="text">
                <h5>20</h5>
                <p>Stock unlisted</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="chat">
          <PieChartShaped 
            data={data}
            active={chartActive}
            chartActiveFunc={chartActiveFunc}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
