import React, {useState, useEffect} from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import {Form, Button, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { getUserDetails } from '../actions/userActions'
import { set } from 'immer/dist/internal'


const UserEditScreen = () => {

    let {id} = useParams()
    const navigate = useNavigate()
    const location = useLocation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const {loading, error, user } = userDetails

    useEffect(() => {
        if(!user.name || user._id !== id){
            dispatch(getUserDetails(id))
        }else{
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }
    }, [user, id, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
    }

  return (

    <>
        <Link to='/admin/userlist' className='btn btn-light my-3'>Go Back</Link>

        <FormContainer>

            <h1 className='text-center'>Edit User</h1>
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

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                </Form.Group>

                <Form.Group controlId='isAdmin'>
                    <Form.Check
                        type='checkbox'
                        label='Is Admin'
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                    ></Form.Check>
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

export default UserEditScreen