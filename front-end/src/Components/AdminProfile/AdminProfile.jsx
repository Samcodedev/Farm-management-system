import React, { useState, useEffect } from 'react'
import './AdminProfile.css'
import img from '../Assets/Farmer.jpg'
import { MdAddChart } from 'react-icons/md'
import { BsListCheck } from 'react-icons/bs'
import { RiLineChartLine } from 'react-icons/ri'
import { MdPlaylistRemove } from 'react-icons/md'
import Axios from 'axios'

import { useLocation } from 'react-router-dom'

// import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import PieChartShaped from '../ReuseComponent/Charts/PieChartShaped'
import LineCharts from '../ReuseComponent/Charts/LineCharts'
import Table from 'react-bootstrap/esm/Table'
import DataTable from '../ReuseComponent/Table/DataTable'

const AdminProfile = () => {

const data = useLocation()

const [chartActive, chartActiveFunc] = useState(0)
let [Name, NameFunc] = useState()
let [Email, EmailFunc] = useState()
let [Phone, PhoneFunc] = useState()
let [Role, RoleFunc] = useState()
let [id, idFunc] = useState()
const [stockCreated, stockCreatedFunc] = useState()
const [stockListed, stockListedFunc] = useState()
const [createdStock, createdStockFunc] = useState()
const [cart, cartFunc] = useState()
let getToken = localStorage.getItem('accessToken')
// let [quantity, quantityFunc] = useState()
let [addQuality, addQualityFunc] = useState(0)
let [addPrice, addPriceFunc] = useState(0)
let [profileImage, profileImageFunc] = useState()
let [display, displayFunc] = useState()
let [profile, profileFunc] = useState()

const handleProfile = async () =>{

  function add(quantityData){
    let quantitySum = 0
    let priceSum = 0
    for(let i=0; i<quantityData.length; i++){
      quantitySum += quantityData[i].quantity
      priceSum += quantityData[i].price
      // console.log(sum);
    }
    addQualityFunc(quantitySum);
    addPriceFunc(priceSum)
  }


  if(getToken){
    const parseJwt = (token) => {
      try {
        return JSON.parse(atob(token.split(".")[1]));
      } catch (e) {
        return null;
      }
    };
    //   console.log(parseJwt(token || validationToken));
    if(parseJwt(getToken).user.role === 'farmer'){
      let result = await fetch(
        `http://localhost:5001/api/admin/`,
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
      let {Name, Email, Phone, role, stockCreated, listedStock, _id } = result
      NameFunc(Name)
      EmailFunc(Email)
      PhoneFunc(Phone)
      RoleFunc(role)
      idFunc(_id)
      stockCreatedFunc(stockCreated.totalStock)
      stockListedFunc(listedStock.totalListedStock)
      createdStockFunc(stockCreated.stocksId)
      console.log(result)
    }
    else if(parseJwt(getToken).user.role === 'client'){
      let result = await fetch(
        `http://localhost:5001/api/client/`,
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
      console.log(result);
      let {Name, Email, Phone, role, cart, image } = result
      // quantityFunc(cart.cart.products)
      NameFunc(Name)
      EmailFunc(Email)
      PhoneFunc(Phone)
      RoleFunc(role)
      cartFunc(cart.cart.products.length)
      add(cart.cart.products)
      displayFunc(image)
    }
  }

  }

  const upload = async () =>{

    
    const formData = new FormData()
    formData.append('file', profile)
    formData.append('upload_preset', 'simephum')

    Axios.post('https://api.cloudinary.com/v1_1/farm-management-system/image/upload', formData).then((response)=>{
      console.log(response);
      profileImageFunc(response.data.url)
    })
    // console.log('link:', cloudinary);


    console.log('working');
    let result = await fetch(
      `http://localhost:5001/api/client/${id}`,
      {
        method: "put",
        credencials: "include",
        mode: "cors",
        body: JSON.stringify({ image: profileImage }),
        headers: {
          "content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem('accessToken'),
        },
      }
    );
    result = await result.json();
    console.log(result);
    displayFunc(result.image)
    handleProfile()
  }

  // function call(profileFunc){
  //   profileImageFunc(profileFunc)
  // }



  useEffect(()=>{
    handleProfile()
  }, [])

  return (
    <div className='AdminProfile'>
      <div className="sub-AdminProfile">
        <div className="details">
          <div className="profile">
            <div className="content">
              <h2>{Name}</h2>
              <h5>{Email}</h5>
              <h5>{Phone}</h5>
              <h5 onClick={upload}>{Role}</h5>
              <input type="file" onChange={(e)=> profileFunc(e.target.files[0]) } />
            </div>
            <div className="img-div">
              <img src={display} alt="" />
            </div>
          </div>
          <Row className="container">
            <Col className="cards" onClick={()=> chartActiveFunc(0)} 
              style={{
                backgroundColor: chartActive === 0? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <MdAddChart />
              </div>
              <div className="text">
                <h5>{stockCreated || cart}</h5>
                <p>{stockCreated? 'Stock Created' : 'Total Cart'}</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(1)}
              style={{
                backgroundColor: chartActive === 1? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <BsListCheck />
              </div>
              <div className="text">
                <h5>{stockListed || addQuality}</h5>
                <p>{stockListed? 'Stock Listed' : 'Total Stocks'}</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(2)}
              style={{
                backgroundColor: chartActive === 2? '#6bbb96' : 'var(--subBrand)'
              }}>
              <div className="icon">
                <RiLineChartLine />
              </div>
              <div className="text">
                <h5>₦{addPrice * addQuality}</h5>
                <p>{addPrice? 'total cost' : 'Amount Earned'}</p>
              </div>
            </Col>
            <Col className="cards" onClick={()=> chartActiveFunc(3)}
              style={{
                backgroundColor: chartActive === 3? '#6bbb96' : 'var(--subBrand)',
                display: 'none'
              }}>
              <div className="icon">
                <MdPlaylistRemove />
              </div>
              <div className="text">
                <h5>5</h5>
                <p>Stock motality</p>
              </div>
            </Col>
          </Row>
          <div className="table" style={{display: stockCreated? 'block' : 'none' }}>
            <DataTable 
              data={createdStock}
            />
          </div>
        </div>
        <div className="chat">
              <LineCharts 
                listed={stockListed}
                create={stockCreated}
                amount={addPrice * addQuality}
                unlisted={stockCreated - stockListed}
              />
        </div>
      </div>
    </div>
  )
}

export default AdminProfile
