import React from 'react'
import './CategoriesList.css'
import ProductCards from '../../ReuseComponent/ProductCards/ProductCards'

const CategoriesList = () => {
  return (
    <div className='CategoriesList'>
      <div className="Categories-grouping">
        <h3>Bulls</h3>
        <div className="Categories-cards">
          <div className="scroll">
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
          </div>
        </div>
      </div>
      <div className="Categories-grouping">
        <h3>Monkeys</h3>
        <div className="Categories-cards">
          <div className="scroll">
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
            <ProductCards />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesList
