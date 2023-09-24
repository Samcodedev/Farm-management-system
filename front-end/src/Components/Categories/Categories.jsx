import React, { useEffect, useState } from 'react'
import CategoriesTop from './Categories-top/CategoriesTop'
import CategoriesList from './Categories-list/CategoriesList'

const Categories = () => {
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
    <div className='categories'>
      <CategoriesTop />
      <CategoriesList 
        data={backendResponse}
      />
    </div>
  )
}

export default Categories
