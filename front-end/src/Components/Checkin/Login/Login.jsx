import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Data from './Data.json'

//bootstrap import
import Button from 'react-bootstrap/Button';
import Input from '../../ReuseComponent/Input';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert'

const Login = () => {
  const [loading, loadinfFunc] = useState(false)
  const [username, usernameFunc] = useState('')
  const [password, passwordFunc] = useState('')
  const [alert, alertFunc] = useState(NaN)
  const [pupup, pupupFunc] = useState(false)

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
    if(indicator === 'username'){
      usernameFunc(data)
    }
    else if(indicator === 'password'){
      passwordFunc(data)
    }
  }

  function loading_function(){
    loadinfFunc(!loading)

    // form validation
    if(!username && !password){
      alertFunc(false)
    }
    else if(!username || !password){
      alertFunc(false)
    }
    else if(username && password){
      alertFunc(true)
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
        <Link to='/Forget-password'>Forget Password</Link>
        <div className='d-grid gap-2'>
          <Button 
            variant={loading? 'secondary' : 'success'}
            size='lg' 
            onClick={loading_function}
          >
              {loading? 'Loading...': 'Login'}
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
            <p className='mb-0'>{alert? 'You will be taken to your profile page shortly' : 'Try filing all the input field above with the right details'} </p>
          </Alert>
          :
          null
        }
        <small>Did not have an account <Link to='/Register'>register</Link></small>
      </form>
    </div>
  )
}

export default Login
