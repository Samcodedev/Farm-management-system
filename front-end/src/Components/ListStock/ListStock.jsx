import React from 'react'
import data from './data.json'
import Input from '../ReuseComponent/Input'

//bootstrap import
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ListStock = () => {
    const [loading, loadinfFunc] = useState(false)
    const [alert, alertFunc] = useState(NaN)

    function loading_function(){
        loadinfFunc(!loading)
    }

    const inputs = data.map((item)=>{
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
  return (
    <div className='list-stock'>
        <div className="sub-CreateStock">
        <form action="" className='g-col-2' onSubmit={handleRegisterStock} >
            <h4>List stock</h4>
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
                <p> </p>
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

export default ListStock
