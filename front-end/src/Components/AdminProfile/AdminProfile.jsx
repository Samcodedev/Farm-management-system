import React from 'react'
import './AdminProfile.css'
import img from '../Assets/dummy.png'
import { MdAddChart } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { RiLineChartLine } from 'react-icons/ri'
import { MdPlaylistRemove } from 'react-icons/md'

// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
        <Row className="container">
          <Col className="cards">
            <div className="icon">
              <MdAddChart />
            </div>
            <div className="text">
              <h5>50</h5>
              <p>Stock created</p>
            </div>
          </Col>
          <Col className="cards">
            <div className="icon">
              <BsListCheck />
            </div>
            <div className="text">
              <h5>30</h5>
              <p>Stock listed</p>
            </div>
          </Col>
          <Col className="cards">
            <div className="icon">
              <RiLineChartLine />
            </div>
            <div className="text">
              <h5>8</h5>
              <p>Stock sold</p>
            </div>
          </Col>
          <Col className="cards">
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
    </div>
  )
}

export default AdminProfile
