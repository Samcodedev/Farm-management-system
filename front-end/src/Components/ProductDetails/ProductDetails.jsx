import React from 'react'
import './ProductDetails.css'
import { MdStar } from 'react-icons/md'
import { BsCartPlus } from 'react-icons/bs'
import { RiPlayListAddFill } from 'react-icons/ri'
import img from '../Assets/animal-2.jpeg'

import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

const ProductDetails = () => {
  return (
    <div className='ProductDetails'>
      <div className="sub-ProductDetails">
        <div className="img-div">
            <img src={img} alt="product" />
        </div>
        <div className="details">
            <div className="top">
                <small>Available</small>
                <h2>Mighty black bull</h2>
                <p>Olonade Toyosi</p>
                <div className="star">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <h1>$899.99</h1>
            </div>
            <div className="body">
                <p>this is a well fed bull and also rigid for farm work, well muscle bull with a hight ability to pull a max load of 500tunes with ease, can run with a speed of 1/2 meter per 1min, a rigid and roburst bull also friendly and less harmful. </p>
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            Details
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover variant='light'>
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Weight</th>
                                        <th>Color</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>3feets * 2feets</td>
                                        <td>5turns</td>
                                        <td>black</td>
                                        <td>3years</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='2'>
                        <Accordion.Header>
                            Rating
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover variant='light'>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Rating</th>
                                        <th>Review</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                    <tr>
                                        <td>Ogundigi</td>
                                        <td><MdStar /><MdStar /><MdStar /></td>
                                        <td>This cow is very nice and productive for working</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey='3'>
                        <Accordion.Header>
                            Contact
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover variant='light'>
                                <thead>
                                    <tr>
                                        <th>Marketer</th>
                                        <th>Tel</th>
                                        <th>Mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Gbotija</td>
                                        <td>+234 9067 925 333</td>
                                        <td>Gbotija@gmail.com</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="bottom">
                <button>ADD TO WISHLIST <RiPlayListAddFill /></button>
                <button>ADD TO CART <BsCartPlus /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
