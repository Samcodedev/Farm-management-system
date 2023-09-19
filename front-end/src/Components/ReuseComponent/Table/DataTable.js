import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import img from '../../Assets/dummy.png'
import './DataTable.css'
import { Link } from 'react-router-dom'

const DataTable = () => {
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
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Cow</td>
            <td>foreign Cow</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>North farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Goat</td>
            <td>He-Goat</td>
            <td>Male</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
        <tr>
            <td>
              <Link to='/StockProfile'>
                  <img src={img} alt='product-img' />
              </Link>
            </td>
            <td>Ram</td>
            <td>Nanny-Goat</td>
            <td>Female</td>
            <td>001</td>
            <td>10kg</td>
            <td>East farm</td>
            <td>4 month</td>
            <td>active</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DataTable
