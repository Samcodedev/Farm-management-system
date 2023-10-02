import React, { useState } from 'react'
import Table from 'react-bootstrap/esm/Table'
import img from '../../Assets/dummy.png'
import './DataTable.css'
import { Link } from 'react-router-dom'

const DataTable = ({data}) => {
  const [stock, stockFunc] = useState()

  setTimeout(() => {
    // const obj = Object.values(Object.keys(data))
    stockFunc(
      data.map((item) =>{
        return(
          <tr>
              <td>
                <Link to='/StockProfile'>
                    <img src={img} alt='product-img' />
                </Link>
              </td>
              <td>{item.stockCategories}</td>
              <td>{item.stockBreed}</td>
              <td>{item.stockGeder}</td>
              <td>{item.stockGroup}</td>
              <td>{item.stockWeight}</td>
              <td>{item.stockCurrentLocation}</td>
              <td>{item.stockAge}</td>
              <td>{item.stockHealthStatus}</td>
          </tr>
        )
      })
    )
  }, 1000);
  return (
    <Table striped hover>
      <thead>
        <tr>
            <th>Image</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Group</th>
            <th>Weight</th>
            <th>Current Location</th>
            <th>Age</th>
            <th>Health Status</th>
        </tr>
      </thead>
      <tbody>
        {stock}
      </tbody>
    </Table>
  )
}

export default DataTable
