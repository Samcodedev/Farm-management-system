import React, { useState } from 'react'
import './CartList.css'
import img from '../../Assets/animal-2.jpeg'

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
        <Table variant='secondary'>
            <thead>
                <tr>
                    <th>Product details</th>
                    <th>Quality</th>
                    <th>Price</th>
                    <th>Total</th>
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
                        <span onClick={qualitySub}>-</span>
                        <div className='count'>{count >=1? count : countFunc(1)}</div>
                        <span onClick={qualityAdd}>+</span>
                    </td>
                    <td><p>${productPrice}</p></td>
                    <td><p>${price}</p></td>
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
                        <span onClick={qualitySub}>-</span>
                        <div className='count'>{count >=1? count : countFunc(1)}</div>
                        <span onClick={qualityAdd}>+</span>
                    </td>
                    <td><p>${productPrice}</p></td>
                    <td><p>${price}</p></td>
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
                        <span onClick={qualitySub}>-</span>
                        <div className='count'>{count >=1? count : countFunc(1)}</div>
                        <span onClick={qualityAdd}>+</span>
                    </td>
                    <td><p>${productPrice}</p></td>
                    <td><p>${price}</p></td>
                </tr>
            </tbody>
        </Table>
    </div>
  )
}

export default CartList
