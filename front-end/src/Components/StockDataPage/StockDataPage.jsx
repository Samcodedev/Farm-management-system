import React, { useEffect, useState } from 'react'
import DataTable from '../ReuseComponent/Table/DataTable'
import RoundedNav from '../ReuseComponent/RoundedNav/RoundedNav'
import './StockDataPage.css'

const StockDataPage = () => {
  const lists = ['Cattle', 'Buffaloes', 'Sheep', 'Goats', 'Pigs', 'Chickens', 'Fish']

  const [backendResponse, backendResponseFunc] = useState()

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
    backendResponseFunc(result)
    console.log(result)
  }

  useEffect(()=>{
    handleRegister()
  },[])

  return (
    <div className='StockDataPage'>
      <div className="sub-StockDataPage">
        <div className="top">
          <RoundedNav 
            lists={lists}
          />
        </div>
        <div className="body">
          <DataTable 
            data={backendResponse}
          />
        </div>
      </div>
    </div>
  )
}

export default StockDataPage
