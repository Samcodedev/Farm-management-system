import React, {useState} from 'react'
import CartList from '../ReuseComponent/CartList/CartList'
import Data from './Data.json'
import './CartPage.css'
import Input from '../ReuseComponent/Input'

//bootstrap import
import Button from 'react-bootstrap/Button';

const CartPage = () => {
  const [loading, loadinfFunc] = useState(false)

  const inputs = Data.map((item) =>{
    return(
      <Input 
        aria-label={item.area_label}
        aria-describedby={item.aria_describedby}
        placeholder={item.placeholder}
        type={item.type}
        // onChange={(e) => onChangeFunc((e.target.value), item.onChange)}
      />
    )
  })

  function loading_function(){
    loadinfFunc(!loading)
    // loading stop
    setTimeout(() => {
      loadinfFunc(false)
    }, 5000);
  }

  return (
    <div className='CartPage'>
      <div className="sub-CartPage">
        <div className="cart">
          <div className="head">
            <h3>Shopping Cart</h3>
            <h3>3items</h3>
          </div>
          <div className="body">
            <CartList />
          </div>
        </div>
        <div className="order-summary">
          <div className="head">
            <h3>Order Summary</h3>
          </div>
          <div className="body">
            <div className="amount">
              <p>3 items</p>
              <p>$888</p>
            </div>
            {inputs}
            <div className='d-grid gap-2'>
              <Button 
                variant={loading? 'secondary' : 'success'}
                size='lg' 
                onClick={loading_function}
              >
                  {loading? 'Loading...': 'Checkout'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage