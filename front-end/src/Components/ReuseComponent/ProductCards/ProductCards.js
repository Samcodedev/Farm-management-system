import React from 'react'
import './ProductCards.css'
import img from '../../Assets/animal-2.jpeg'
import { 
  MdReadMore,
  MdStar
 } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ProductCards = () => {
  return (
    <div className='ProductCards'>
        <div className='img-div'>
          <img src={img} alt='product'  id='product'/>
        </div>
        <div className='details'>
            <h5>Nigeria bull Cow</h5>
            <div className='star'>
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
              <MdStar />
            </div>
            <p>A well fed bull breed from the north forex well fed and fat tommy bull...</p>
            <h4><s>$999.99</s> $850.99</h4>
            <Link to='/Details'><button>Details <MdReadMore /> </button></Link>
        </div>
    </div>
  )
}

export default ProductCards
