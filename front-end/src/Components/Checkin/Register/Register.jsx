import React from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
import Data from './Data.json'

//bootstrap import
import Button from 'react-bootstrap/Button';
import Input from '../../ReuseComponent/Input';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

const Register = () => {
    const [loading, loadinfFunc] = useState(false)
    
    const [fullname, fullnameFunc] = useState('')
    const [email, emailFunc] = useState('')
    const [phone, phoneFunc] = useState('')
    const [password, passwordFunc] = useState('')
    const [confirmpassword, confirmpasswordFunc] = useState('')

    const [alert, alertFunc] = useState(NaN)
    const [pupup, pupupFunc] = useState(false)
    // const []
  
    const inputs = Data.map((item)=>{
      return(
        <Input 
          aria-label={item.area_label}
          aria-describedby={item.aria_describedby}
          placeholder={item.placeholder}
          type={item.type}
          onChange={(e) => onChangeFunc((e.target.value), item.onChange)}
        />
      )
    })
  
    
    function onChangeFunc(data, indicator){
      if(indicator === 'fullname'){
        fullnameFunc(data)
      }
      else if(indicator === 'email'){
        emailFunc(data)
      }
      else if(indicator === 'phone'){
        phoneFunc(data)
      }
      else if(indicator === 'password'){
        passwordFunc(data)
      }
      else if(indicator === 'confirmpassword'){
        confirmpasswordFunc(data)
      }
    }
  
    function loading_function(){
      loadinfFunc(!loading)
  
      // form validation
      if(!fullname && !password && !email && !phone && !password && !confirmpassword){
        alertFunc(false)
      }
      else if(!fullname || !password || !email || !phone || !password || !confirmpassword){
        alertFunc(false)
      }
      else if(fullname && password && email && phone && password && confirmpassword){
        alertFunc(true)
      }
      
      if(password !== confirmpassword){
        alertFunc(false)
      }
  
      // loading stop
      setTimeout(() => {
        loadinfFunc(false)
        pupupFunc(true)
      }, 5000);
      pupupFunc(false)
    }

  return (
    <div className='Check'>
      <form action=''>
        <h4>Farm management system</h4>
        {inputs}
        <div className='d-grid gap-2'>
          <Button 
            variant={loading? 'secondary' : 'success'}
            size='lg' 
            onClick={loading_function}
          >
              {loading? 'Loading...': 'Register'}
          </Button>
        </div>
        {
          pupup?
          <Alert 
            variant={alert? 'success' : 'warning'}
            className='warning'
            dismissible
          >
            <Alert.Heading>{alert? 'Congratulation' : 'OOh! Sorry'}</Alert.Heading>
            <p>{alert? 'Welcome to the Farm management system' : 'Unable to log you in' } </p>
            <hr />
            <p className='mb-0'>{alert? 'You will be taken to your profile page shortly' : 'Try filing all the input field above with the correct details'} </p>
          </Alert>
          :
          null
        }
        <small>Already have an account <Link to='/Login'>Login</Link></small>
      </form>
    </div>
  )
}

export default Register
