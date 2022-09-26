import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentScreen = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const cart = useSelector(state => state.cart)
  const {shippingAddress} = cart

  if(!shippingAddress){
    navigate('/shipping')
  }

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod({paymentMethod}))
    navigate('/placeorder')
  }

  return(
    <FormContainer>
      <CheckoutSteps step1 step2 step3/>
      <h1 className='text-center'>Payment Method</h1>

      <Form onSubmit={submitHandler} >
        <Row className='text-center'>
          <Col>
            <Form.Group controlId='paymentMethod'>
              <Form.Label>Select payment method</Form.Label>
                <Form.Check
                    type='radio'
                    label='PayPal or credit card'
                    id='PayPal'
                    name='paymentMethod'
                    value='PayPal'
                    checked
                    onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
            </Form.Group>
            <Button type='submit' className='mt-3' variant='primary'>Continue</Button>
          </Col>
        </Row>

      </Form>
    </FormContainer>
  )
}

export default PaymentScreen