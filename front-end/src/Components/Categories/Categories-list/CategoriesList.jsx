import React, {useEffect, useState} from 'react'
import './CategoriesList.css'
import ProductCards from '../../ReuseComponent/ProductCards/ProductCards'

const CategoriesList = () => {

  const [backendResponse, backendResponseFunc] = useState()
  const [listedProduct, listedProductFunc] = useState()
  const savedStock = localStorage.getItem('listedstocks')

  const handleRegister = async () =>{
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
    backendResponseFunc(result)
    console.log(result)
    console.log(backendResponse);
  }

  useEffect(()=>{
    handleRegister()
  },[])

  setTimeout(() => {
    listedProductFunc(
      (backendResponse? backendResponse : JSON.parse(savedStock)).map((item)=>{
        return(
          <ProductCards 
            stockCategories={item.stockCategories}
            stockBreed={item.stockBreed}
            stockGroup={item.stockGroup}
            stockImage={item.stockImage}
            stockAge={item.stockAge}
            stockGeder={item.stockGeder}
            stockWeight={item.stockWeight}
            stockCurrentLocation={item.stockCurrentLocation}
    
            stockPrice={item.stockPrice}
            stockDescription={item.stockDescription}
            stockReview={item.stockReview}
            
            userName={item.userName}
            userEmail={item.userEmail}
            userPhone={item.userPhone}
            data={item}
          />
        )
      })
    )
  }, 1000);

  return (
    <div className='CategoriesList'>
      <div className="Categories-grouping">
        <h3>Bulls</h3>
        <div className="Categories-cards">
          <div className="scroll">
            {listedProduct}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesList
