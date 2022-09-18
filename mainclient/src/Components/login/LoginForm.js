import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from '../../Pages/login/loginAction';
const LoginForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form,setForm]= useState({})
const {user} = useSelector((state)=>state.user)
  const handleOnChange = (e)=>{
    const {name,value}= e.target
    setForm({...form, [name]:value,})
  }

  const origin = "/dashboard"
useEffect(()=>{
user._id && navigate(origin)
},[user,navigate])

  const handleOnSubmit =  (e)=>{
    e.preventDefault()
    console.log(form);
   const result =   dispatch(loginAction(form))


  }
  return (
    <div>
        <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" onChange={handleOnChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" onChange={handleOnChange}/>
      </Form.Group>
  
      <Button variant="primary" type="submit">
        SIGN IN
      </Button>
    </Form>

        
        <Link to="/register">Register</Link>

    </div>
  )
}

export default LoginForm