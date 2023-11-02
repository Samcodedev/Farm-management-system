import React from 'react'
import './ProductDetails.css'
import { MdStar } from 'react-icons/md'
import { BsCartPlus } from 'react-icons/bs'
import { RiPlayListAddFill } from 'react-icons/ri'
import img from '../Assets/animal-2.jpeg'
import { useLocation } from 'react-router-dom'

import Accordion from 'react-bootstrap/Accordion'
import Table from 'react-bootstrap/Table'

const ProductDetails = () => {
    let stockData = useLocation().state
    const {_id, stockBreed, stockPrice } = stockData
    console.log(stockData);
    
    const addCart = async () =>{
        let result = await fetch(
            'http://localhost:5001/api/cart/',
            {
                method: "post",
                credencials: "include",
                mode: "cors",
                body: JSON.stringify({
                    productId:_id, 
                    quantity: 1, 
                    name: stockBreed, 
                    price: stockPrice
                }),
                headers: {
                  "content-Type": "application/json",
                  Authorization: "Bearer " + localStorage.getItem('accessToken'),
                },
            }
        )
        result = await result.json()
        console.log(result);
    }


  return (
    <div className='ProductDetails'>
      <div className="sub-ProductDetails">
        <div className="img-div">
            <img src={img} alt="product" />
        </div>
        <div className="details">
            <div className="top">
                <small>Available</small>
                <h2>{stockData.stockBreed}</h2>
                <p>{stockData.userName}</p>
                <div className="star">
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                    <MdStar />
                </div>
                <h1>{stockData.stockPrice}</h1>
            </div>
            <div className="body">
                <p>{stockData.stockDescription}</p>
                <Accordion defaultActiveKey='0'>
                    <Accordion.Item eventKey='1'>
                        <Accordion.Header>
                            Details
                        </Accordion.Header>
                        <Accordion.Body>
                            <Table striped bordered hover variant='light'>
                                <thead>
                                    <tr>
                                        <th>Gender</th>
                                        <th>Weight</th>
                                        <th>Color</th>
                                        <th>Age</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{stockData.stockGeder}</td>
                                        <td>{stockData.stockWeight}turns</td>
                                        <td>black</td>
                                        <td>{stockData.stockAge}years</td>
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
                                        <td>{stockData.userName}</td>
                                        <td>{stockData.userPhone}</td>
                                        <td>{stockData.userEmail}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className="bottom">
                <button>ADD TO WISHLIST <RiPlayListAddFill /></button>
                <button onClick={addCart}>ADD TO CART <BsCartPlus /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
