import React, {useEffect} from 'react'
import Header from './Header/Header'
import Stocks from './Stocks/Stocks';
import Service from './Service/Service';

const LandingPage = () => {
  
  const handleStock = async () =>{
    let result = await fetch(
      "http://localhost:5001/api/stock/",
      {
        method: "get",
        credencials: "include",
        mode: "cors",
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem('stocks', JSON.stringify(result))
  }
  
  const handleListedStock = async () =>{
    let result = await fetch(
      "http://localhost:5001/api/sale/",
      {
        method: "get",
        credencials: "include",
        mode: "cors",
        headers: {
          "content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    localStorage.setItem('listedstocks', JSON.stringify(result))
    console.log(result);
  }

  useEffect(()=>{
    handleListedStock()
    handleStock()
  },[])

  return (
    <>
      <Header />
      <Stocks />
      <Service />
    </>
  )
}

export default LandingPage
