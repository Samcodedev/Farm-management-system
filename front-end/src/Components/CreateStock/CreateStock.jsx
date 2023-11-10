import React, {useState} from 'react'
import Data from './Data.json'
import Input from '../ReuseComponent/Input'
import './CreateStock.css'
import Axios from 'axios'

//bootstrap import
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { BsNutFill } from 'react-icons/bs';
import {useNavigate} from 'react-router-dom'

const CreateStock = () => {
  const [stockImage, stockimageFunc] = useState()
  const [stockCategories, stockcategoriesFunc] = useState()
  const [stockBreed, stockbreedFunc] = useState()
  const [stockGeder, stockgenderFunc] = useState()
  const [stockGroup, stockgroupFunc] = useState()
  const [stockAge, stockageFunc] = useState()
  const [stockWeight, stockweightFunc] = useState()
  const [stockCurrentLocation, stockCurrentLocationFunc] = useState()
  const [stockHealthPercente, stockhealthpercenteFunc] = useState()
  const [stockHealthStatus, stockHealthStatusFunc] = useState()
  const [stockVeterinarian, stockveterinarianFunc] = useState()
  const [stockColor, stockcolorFunc] = useState()

  let [stockVerccineName, stockVerccineNameFunc] = useState()
  let [stockVerccineDueDate, stockVerccineDueDateFunc] = useState()
  let [stockLastVeterinarianCheck, stockLastVeterinarianCheckFunc] = useState()
  let [stockLastVeterinarian, stockLastVeterinarianFunc] = useState()
  let [stockLastDiagnosis, stockLastDiagnosisFunc] = useState()


  const [loading, loadinfFunc] = useState(false)
  const [alert, alertFunc] = useState(NaN)
  const [pupup, pupupFunc] = useState(false)
  const [backendResponse, backendResponseFunc] = useState()
  const [cloudinary, cloudinaryFunc] = useState()


  const navigate = useNavigate()



  const handleRegisterStock = async (e) =>{
    e.preventDefault();
    console.log(stockImage);

    const formData = new FormData()
    formData.append('file', stockImage)
    formData.append('upload_preset', 'simephum')

    Axios.post('https://api.cloudinary.com/v1_1/farm-management-system/image/upload', formData).then((response)=>{
      console.log(response);
      cloudinaryFunc(response.data.url)
    })
    console.log('link:', cloudinary);

    if(cloudinary){
      e.preventDefault();
      console.log(stockVerccineName);
      let result = await fetch(
        "http://localhost:5001/api/stock/register",
        {
          method: "post",
          credencials: "include",
          mode: "cors",
          body: JSON.stringify({
            stockCategories,
            stockBreed,
            stockGroup,
            stockImage: cloudinary,
            stockAge,
            stockHealthStatus,
            stockHealthPercente,
            stockGeder,
            stockWeight,
            stockCurrentLocation,
            stockVeterinarian,
            stockColor,

            stockVerccineName,
            stockVerccineDueDate,
            stockLastVeterinarianCheck,
            stockLastVeterinarian,
            stockLastDiagnosis
          }),
          headers: {
            "content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem('accessToken'),
          },
        }
      );
      result = await result.json();
      if(result.message){
        backendResponseFunc(result.message)
        alertFunc(false)
      }
      if(result.stockImage){
        backendResponseFunc(result)
        alertFunc(true)
        navigate('/AdminProfile')
        // loading stop
        setTimeout(() => {
          loadinfFunc(false)
          pupupFunc(true)
        }, 5000);
        pupupFunc(false)
      }
      console.log(result);
    }

  }
  
    const inputs = Data.map((item) =>{
        return(
            <Col xs={6} md={4}>
              <Input 
                  aria-label={item.area_label}
                  aria-describedby={item.aria_describedby}
                  placeholder={item.placeholder}
                  type={item.type}
                  onChange={(e) => onChangeFunc((item.type === 'file'? e.target.files[0] : e.target.value), item.onChange)}
              />
            </Col>
        )
    })

    function onChangeFunc(data, indicator){

      if(indicator === 'stockimage'){
        stockimageFunc(data)
      }
      else if(indicator === 'stockcategories'){
        stockcategoriesFunc(data)
      }
      else if(indicator === 'stockbreed'){
        stockbreedFunc(data)
      }
      else if(indicator === 'stockgender'){
        stockgenderFunc(data)
      }
      else if(indicator === 'stockgroup'){
        stockgroupFunc(data)
      }
      else if(indicator === 'stockage'){
        stockageFunc(data)
      }
      else if(indicator === 'stockweight'){
        stockweightFunc(data) 
      }
      else if(indicator === 'stocklocation'){
        stockCurrentLocationFunc(data)
      }
      else if(indicator === 'stockhealthpercente'){
        stockhealthpercenteFunc(data)
      }
      else if(indicator === 'stockhealthcondition'){
        stockHealthStatusFunc(data)
      }
      else if(indicator === 'stockveterinarian'){
        stockveterinarianFunc(data)
      }
      else if(indicator === 'stockcolor'){
        stockcolorFunc(data)
      }
    }

    function loading_function(){
      stockVerccineNameFunc('null')
      stockVerccineDueDateFunc('null')
      stockLastVeterinarianCheckFunc('null')
      stockLastVeterinarianFunc('null')
      stockLastDiagnosisFunc('null')
      loadinfFunc(!loading)
      console.log(false);

      // form validation
      if(!stockCategories && !stockBreed && !stockGroup && !stockImage && !stockAge && !stockHealthStatus && !stockHealthPercente && !stockGeder && !stockWeight && !stockVerccineName && !stockVerccineDueDate && !stockCurrentLocation && !stockLastVeterinarianCheck && !stockLastVeterinarian && !stockLastDiagnosis && !stockVeterinarian && !stockColor){
        alertFunc(false)
        console.log('error 1');
      }
      if(!stockCategories || !stockBreed || !stockGroup || !stockImage || !stockAge || !stockHealthStatus || !stockHealthPercente || !stockGeder || !stockWeight || !stockVerccineName || !stockVerccineDueDate || !stockCurrentLocation || !stockLastVeterinarianCheck || !stockLastVeterinarian || !stockLastDiagnosis || !stockVeterinarian || !stockColor){
        alertFunc(false)
        console.log('error 2');
      } 
      else if(stockAge < 0 || stockWeight < 0){
        alertFunc(false)
        console.log('error 3');
      }
      else if(stockAge < 0 && stockWeight < 0){
        alertFunc(false)
        console.log('error 4');
      }
      else if(stockCategories && stockBreed && stockGroup && stockImage && stockAge && stockHealthStatus && stockHealthPercente && stockGeder && stockWeight && stockVerccineName && stockVerccineDueDate && stockCurrentLocation && stockLastVeterinarianCheck && stockLastVeterinarian && stockLastDiagnosis && stockVeterinarian && stockColor){
        alertFunc(true)
        console.log('fine');
      }
      console.log('error last');
    }

  return (
    <div className='CreateStock'>
      <div className="sub-CreateStock">
        <form action="" className='g-col-2' onSubmit={handleRegisterStock} >
          <h4>create stock</h4>
            <img src={stockImage} alt="" style={{display: stockImage? 'block' : 'none'}} />
            <Row>
              {inputs}
            </Row>
            <div className='d-grid gap-2'>
          <Button 
            variant={loading? 'secondary' : 'success'}
            size='lg' 
            onClick={loading_function}
            type='submit'
          >
              {loading? 'Loading...': 'Create Stock'}
          </Button>
        </div>
        {
          pupup?
          <Alert 
            variant={alert? 'success' : 'warning'}
            className='warning'
            dismissible
          >
            <Alert.Heading>{alert? 'Congratulation' : 'OOh! Sorry'}</Alert.Heading>
            <p>{alert? `Stock ${backendResponse.stockCategories}, Bread ${backendResponse.stockBreed} created successfuly` : `${backendResponse}` } </p>
            <hr />
            <p className='mb-0'>{alert? 'You will be taken to the stock profile shortly' : 'Try filing all the input field above with the right details'} </p>
          </Alert>
          :
          null
        }
        </form>
      </div>
    </div>
  )
}

export default CreateStock
