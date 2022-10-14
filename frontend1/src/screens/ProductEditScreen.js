import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { listProductDetails,  } from '../actions/productActions'


const ProductEditScreen = () => {

    let {id} = useParams()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const {loading, error, product } = productDetails

    // const productUpdate = useSelector(state => state.productUpdate)
    // const {
    //     loading: loadingUpdate, 
    //     error: errorUpdate, 
    //     success: successUpdate 
    // } = productUpdate

    useEffect(() => {
        // if(successUpdate){
        //     dispatch({type: USER_UPDATE_RESET})
        //     navigate('/admin/userlist')
        // }else{
        //     if(!user.name || user._id !== id){
        //         dispatch(getUserDetails(id))
        //     }else{
        //         setName(user.name)
        //         setEmail(user.email)
        //         setIsAdmin(user.isAdmin)
        //     }
        // }

        if(!product.name || product._id !== id){
            dispatch(listProductDetails(id))
        }else{
            setName(product.name)
            setPrice(product.price)
            setImage(product.image)
            setBrand(product.brand)
            setCategory(product.category)
            setCountInStock(product.countInStock)
            setDescription(product.description)
        }
        
    }, [successUpdate, product, id, dispatch, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        //dispatch(updateUser({_id: id, name, email, isAdmin}))
    }

  return (

    <>
        <Link to='/admin/productlist' className='btn btn-light my-3'>Go Back</Link>

        <FormContainer>

            <h1 className='text-center'>Edit Product</h1>
            {/* {loadingUpdate && <Loader/>}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>} */}
            {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : (
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='price'>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='image'>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter image url'
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='brand'>
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter brand '
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='countInStock'>
                    <Form.Label>Count In Stock</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Enter countInStock'
                        value={countInStock}
                        onChange={(e) => setCountInStock(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='category'>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter category '
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='description'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter description '
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Row className='text-center'>
                    <Col>
                        <Button type='submit' className='mt-3' variant='primary'>Update</Button>
                    </Col>
                </Row>
                
            </Form>
            )}
            
        </FormContainer>

    </>

  )
}

export default ProductEditScreen