import React, { useState } from 'react'
import './ProductCards.css'
import img from '../../Assets/animal-2.jpeg'
import { 
  MdReadMore,
  MdStarOutline,
  MdStar
 } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductCards = ({data,stockBreed,stockPrice,stockDescription}) => {
  // const [star, starFunc] = useState()
  // if(stockReview === "0"){
  //   starFunc(
  //     <MdStarOutline />
  //     <MdStarOutline />
  //     <MdStarOutline />
  //     <MdStarOutline />
  //     <MdStarOutline />
  //   )
  // }
  
  return (
    <div className='ProductCards'>
        <div className='img-div'>
          <img src={img} alt='product'  id='product'/>
        </div>
        <div className='details'>
            <h5>{stockBreed}</h5>
            <div className='star'>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <p>{stockDescription}</p>
            <h4><s>$999.99</s> {stockPrice}</h4>
            <Link to='/Details' state={data}><button>Details <MdReadMore /> </button></Link>
        </div>
    </div>
  )
}

export default ProductCards
