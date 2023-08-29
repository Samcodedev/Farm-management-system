import React, {useState} from 'react'
import Data from './Data.json'
import Input from '../ReuseComponent/Input'
import './CreateStock.css'

//bootstrap import
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const CreateStock = () => {
  const [stockimage, stockimageFunc] = useState()
  const [stockname, stocknameFunc] = useState()
  const [discription, discriptionFunc] = useState()
  const [stockcategories, stockcategoriesFunc] = useState()
  const [stockage, stockageFunc] = useState()
  const [stockweight, stockweightFunc] = useState()
  const [stocksize, stocksizeFunc] = useState()
  const [stockhealthcondition, stockstockhealthconditionFunc] = useState()
  const [stockcolor, stockcolorFunc] = useState()
  const [stockbreed, stockbreedFunc] = useState()

  const [loading, loadinfFunc] = useState(false)
  const [alert, alertFunc] = useState(NaN)
  const [pupup, pupupFunc] = useState(false)


    const inputs = Data.map((item) =>{
        return(
            <Col xs={6} md={4}>
              <Input 
                  aria-label={item.area_label}
                  aria-describedby={item.aria_describedby}
                  placeholder={item.placeholder}
                  type={item.type}
                  onChange={(e) => onChangeFunc((item.type === 'file'? URL.createObjectURL(e.target.files[0]) : e.target.value), item.onChange)}
              />
            </Col>
        )
    })

    function onChangeFunc(data, indicator){
      if(indicator === 'stockimage'){
        stockimageFunc(data)
      }
      else if(indicator === 'stockname'){
        stocknameFunc(data)
      }
      else if(indicator === 'discription'){
        discriptionFunc(data)
      }
      else if(indicator === 'stockcategories'){
        stockcategoriesFunc(data)
      }
      else if(indicator === 'stockbreed'){
        stockbreedFunc(data)
      }
      else if(indicator === 'stockage'){
        stockageFunc(data)
      }
      else if(indicator === 'stockweight'){
        stockweightFunc(data) 
      }
      else if(indicator === 'stocksize'){
        stocksizeFunc(data)
      }
      else if(indicator === 'stockhealthcondition'){
        stockstockhealthconditionFunc(data)
      }
      else if(indicator === 'stockcolor'){
        stockcolorFunc(data)
      }
    }

    function loading_function(){
      loadinfFunc(!loading)

      // form validation
      if(!stockimage && !stockname && !discription && !stockcategories && !stockbreed && !stockage && !stockweight && !stocksize && !stockhealthcondition && !stockcolor){
        alertFunc(false)
      }
      else if(!stockimage || !stockname || !discription || !stockcategories || !stockbreed || !stockage || !stockweight || !stocksize || !stockhealthcondition || !stockcolor ){
        alertFunc(false)
      } 
      else if(stockage < 1 || stockweight < 1){
        alertFunc(false)
      }
      else if(stockage < 0 && stockweight < 0){
        alertFunc(false)
      }
      else if(stockimage && stockname && discription && stockcategories && stockbreed && stockage && stockweight && stocksize && stockhealthcondition && stockcolor){
        alertFunc(true)
      }

      // loading stop
      setTimeout(() => {
        loadinfFunc(false)
        pupupFunc(true)
      }, 5000);
      pupupFunc(false)
    }

  return (
    <div className='CreateStock'>
      <div className="sub-CreateStock">
        <form action="" className='g-col-2'>
          <h4>create stock</h4>
            <img src={stockimage} alt="" style={{display: stockimage? 'block' : 'none'}} />
            <Row>
              {inputs}
            </Row>
            <div className='d-grid gap-2'>
          <Button 
            variant={loading? 'secondary' : 'success'}
            size='lg' 
            onClick={loading_function}
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
            <p>{alert? 'Stock created successfuly' : 'Unable to create stock' } </p>
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
