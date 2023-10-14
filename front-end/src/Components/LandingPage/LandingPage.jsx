import React, {useEffect} from 'react'
import Header from './Header/Header'

const LandingPage = () => {
  
  const handleRegister = async () =>{
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

  useEffect(()=>{
    handleRegister()
  },[])

  return (
    <>
      <Header />
    </>
  )
}

export default LandingPage
