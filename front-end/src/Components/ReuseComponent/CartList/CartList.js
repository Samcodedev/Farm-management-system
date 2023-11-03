import React, { useState } from 'react'
import './CartList.css'
import img from '../../Assets/animal-2.jpeg'

import {MdOutlineDeleteForever, MdShoppingCartCheckout} from 'react-icons/md'
//bootstrap import
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/esm/Table'

const CartList = () => {
    let [productId, productIdFunc] = useState()
    let [quantity, quantityFunc] = useState()
    let [name, nameFunc] = useState()
    let [price, priceFunc] = useState()
    let [backendResponse, backendResponseFunc] = useState()
    const [CartAvailable, CartAvailableFunc] = useState(0)


    const cart = async () =>{
        let result = await fetch(
            'http://localhost:5001/api/cart/',
            {
              method: "get",
              credencials: "include",
              mode: "cors",
              headers: {
                "content-Type": "application/json",
                Authorization: "Bearer " + localStorage.getItem('accessToken'),
              },
            }
          );
          result = await result.json();
          CartAvailableFunc(result.products)
        // backendDataFunc(result)
        backendResponseFunc( (result.products).map((item, index) =>{
            return(
                <tr>
                    <td>
                        <div className='flex'>
                            <img src={img} alt='product-img' />
                            <div className='details'>
                                <h4>{item.name}</h4>
                                <h5>{index}</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <input type='number' placeholder={item.quantity} onChange={(e) => update((e.target.value), index)} />
                    </td>
                    <td><p>${item.price}</p></td>
                    <td><p>${item.price * item.quantity}</p></td>
                    <td>
                        <Button variant="danger">remove <MdOutlineDeleteForever fontSize={23} /> </Button>
                    </td>
                </tr>
            )
        })
        )

        
        function update(data, index){
            quantityFunc(data)

            // if(data === 0){
            //     delCart()
            // }
             
            productIdFunc(result.products[index].productId)
            nameFunc(result.products[index].name)
            priceFunc(result.products[index].price)
        }
    }

    const addCart = async () =>{
        let result = await fetch(
            'http://localhost:5001/api/cart/',
            {
                method: "post",
                credencials: "include",
                mode: "cors",
                body: JSON.stringify({
                    productId, 
                    quantity, 
                    name, 
                    price
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

    const delCart = async () =>{
        let result = await fetch(
            'http://localhost:5001/api/cart/',
            {
                method: "delete",
                credencials: "include",
                mode: "cors",
                body: JSON.stringify({
                    productId
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
    
    // function del(data, index){
    //     quantityFunc(data)
    //     if(data === 0){
    //         delCart()
    //     }
    //     productIdFunc(CartAvailable[index].productId)
    // }


  return (
    <div className='CartList'>
        <div className="head">
            <h3>Product Cart</h3>
            <h3>{CartAvailable.length} Item{CartAvailable <= 1 ? '' : 's'}</h3>
            <Button variant="success">Check Out <MdShoppingCartCheckout fontSize={23} /> </Button>
        </div>
        <Table>
            <thead>
                <tr>
                    <th>Product details</th>
                    <th>Quality</th>
                    <th onClick={delCart}>Price</th>
                    <th onClick={addCart}>Total</th>
                    <th onClick={cart}>Remove</th>
                </tr>
            </thead>
            <tbody>
                {backendResponse}
            </tbody>
        </Table>
    </div>
  )
}

export default CartList
