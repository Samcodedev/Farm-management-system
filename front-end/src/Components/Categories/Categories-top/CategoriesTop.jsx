import React from 'react'
import './CategoriesTop.css'
import RoundedNav from '../../ReuseComponent/RoundedNav/RoundedNav'

const CategoriesTop = () => {
    const lists = ['livestock', 'plants', 'Foods']
  return (
    <div className='CategoriesTop'>
      <RoundedNav 
        lists={lists}
      />
    </div>
  )
}

export default CategoriesTop
