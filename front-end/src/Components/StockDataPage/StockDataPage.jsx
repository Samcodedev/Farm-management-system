import React from 'react'
import DataTable from '../ReuseComponent/Table/DataTable'
import RoundedNav from '../ReuseComponent/RoundedNav/RoundedNav'
import './StockDataPage.css'

const StockDataPage = () => {
  const lists = ['Cattle', 'Buffaloes', 'Sheep', 'Goats', 'Pigs', 'Chickens']
  return (
    <div className='StockDataPage'>
      <div className="sub-StockDataPage">
        <div className="top">
          <RoundedNav 
            lists={lists}
          />
        </div>
        <div className="body">
          <DataTable />
        </div>
      </div>
    </div>
  )
}

export default StockDataPage
