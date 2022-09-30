import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { otp } from '../../helpers/axiosHelper';
// import UpdatePassword from '../updatePassword/UpdatePassword';

const ResetPassword = () => {
    const [form,setForm] = useState([])
    const [password,setpassword] = useState('false')
    const [updatePassword, setUpdatePassword] = useState([])

    const handleOnChange = (e)=>{
       const {name,value}= e.target
       setForm({...form,[name]:value,})
    }

    const handleOnSubmit = async (e)=>{
        e.preventDefault()
        const result = await otp(form)
        console.log(result.status);
        result.status === 'success' && setpassword('true')
        // ? alert(result.message) : alert(result.message)

    }

    const handleChange = (e)=>{
        const {name,value}= e.target
        console.log(e.target.value);
        setUpdatePassword({...updatePassword,[name]:value,})
     }
 
     const handleSubmit = async (e)=>{
         e.preventDefault()
         console.log(updatePassword);
         const {password,confirmPassword,otp}=updatePassword
         const obj = {
            password,
            otp,
            ...email
         }
         
         
     }

  
     return password === 'true' ? (<div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="enter the new password" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control name='confirm password' type="password" placeholder="confirm your password" onChange={handleChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>OTP</Form.Label>
        <Form.Control name='otp' type="number" placeholder="Enter the otp" onChange={handleChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


        
        </Card.Body>
    </Card>
    </div>) : 
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleOnChange}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


        
        </Card.Body>
    </Card>

    </div>
  
}

export default ResetPassword;