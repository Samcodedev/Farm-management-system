import React from 'react'
import Table from 'react-bootstrap/esm/Table'
import img from '../../Assets/dummy.png'
import './DataTable.css'

const DataTable = () => {
  return (
    <Table striped hover>
      <thead>
        <tr>
            <th>Image</th>
            <th>Region</th>
            <th>Animal species</th>
            <th>Production system</th>
            <th>commodity</th>
            <th>Emission Intensity</th>
            <th>Production</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>
              <img src={img} alt='product-img' />
              <div id='pup'>
                <img src={img} alt='product-img' />
              </div>
            </td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Aggregated</td>
            <td>Milk</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Aggregated</td>
            <td>Milk</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Aggregated</td>
            <td>Milk</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Aggregated</td>
            <td>Milk</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Grassland systems</td>
            <td>Aggregated</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Grassland systems</td>
            <td>Milk</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Grassland systems</td>
            <td>Meat</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Mixed system</td>
            <td>Aggregated</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Mixed system</td>
            <td>Milk</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
        <tr>
            <td><img src={img} alt='product-img' /></td>
            <td>Global</td>
            <td>Cattle</td>
            <td>Mixed system</td>
            <td>Meat</td>
            <td>160.3</td>
            <td>29163104088</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default DataTable
