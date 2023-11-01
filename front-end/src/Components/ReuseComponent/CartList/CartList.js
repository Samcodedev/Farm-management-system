import React, { useState } from 'react'
import './CartList.css'
import img from '../../Assets/animal-2.jpeg'

import {MdOutlineDeleteForever} from 'react-icons/md'
//bootstrap import
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table'

const CartList = () => {
    let productPrice = 22
    let [count, countFunc] = useState(1)
    const [price, priceFunc] = useState(productPrice)

    function qualitySub(){
        countFunc(count -= 1)
        if(price > productPrice){
            priceFunc(price - productPrice)
        }
        else{
            priceFunc(productPrice)
        }
    }
    function qualityAdd(){
        countFunc(count += 1)
        priceFunc(productPrice * count)
    }

  return (
    <div className='CartList'>
        <Table>
            <thead>
                <tr>
                    <th>Product details</th>
                    <th>Quality</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div className='flex'>
                            <img src={img} alt='product-img' />
                            <div className='details'>
                                <h4>Nigeria Bull</h4>
                                <h5>${productPrice}</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input type='number' onChange={(e)=> change(e.target.value) } />
                    </td>
                    <td><p>${productPrice}</p></td>
                    <td><p>${price}</p></td>
                    <td>
                        <Button variant="danger">remove <MdOutlineDeleteForever fontSize={23} /> </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='flex'>
                            <img src={img} alt='product-img' />
                            <div className='details'>
                                <h4>Nigeria Bull</h4>
                                <h5>${productPrice}</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input type='number' onChange={(e)=> change(e.target.value) } />
                    </td>
                    <td><p>${productPrice}</p></td>
                    <td><p>${price}</p></td>
                    <td>
                        <Button variant="danger">remove <MdOutlineDeleteForever fontSize={23} /> </Button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className='flex'>
                            <img src={img} alt='product-img' />
                            <div className='details'>
                                <h4>Nigeria Bull</h4>
                                <h5>${productPrice}</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input type='number' onChange={(e)=> change(e.target.value) } />
                    </td>
                    <td><p>${productPrice}</p></td>
                    <td><p>${price}</p></td>
                    <td>
                        <Button variant="danger">remove <MdOutlineDeleteForever fontSize={23} /> </Button>
                    </td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default CartList
