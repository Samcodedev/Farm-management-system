import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Checkin/Login/Login'
import Navication from './ReuseComponent/Navbar/Navbar'
import LandingPage from './LandingPage/LandingPage'
import Register from './Checkin/Register/Register'
import Categories from './Categories/Categories'
import ProductDetails from './ProductDetails/ProductDetails'
import CreateStock from './CreateStock/CreateStock'
import ForgetPassword from './Checkin/FogetPassword/ForgetPassword'
import ResetPassword from './Checkin/ResetPassword/ResetPassword'
import CartPage from './CartPage/CartPage'
import UpdateStock from './UpdateStock/UpdateStock'

const Components = () => {
  return (
    <Router>
        <Navication />
        <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path="/Login" element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/ForgetPassword' element={<ForgetPassword />} />
            <Route path='/ResetPassword' element={<ResetPassword />} />
            <Route path='/Categories' element={<Categories />} />
            <Route path='/Details' element={<ProductDetails />} />
            <Route path='/CreateStock' element={<CreateStock />} />
            <Route path='/UpdateStock' element={<UpdateStock />} />
            <Route path='/Cart' element={<CartPage />} />
        </Routes>
    </Router>
  )
}

export default Components
