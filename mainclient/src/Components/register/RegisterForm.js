import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {toast} from "react-toastify"

export const RegisterForm = () => {
    const [form,setForm]= useState({})
    
    const handleOnChange = (e)=>{
        const{name, value}= e.target
        setForm({...form, 
            [name]:value,
    })

    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        console.log(form);

        if (form.password !== form.confirmPassword) {
          return toast.error("Password do not match")
        }
    }
  return (
    <div>
         <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text"name='Fname' placeholder="Bob" onChange={handleOnChange} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="Lname" name="Lname" placeholder="Marley" onChange={handleOnChange} required />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='Email' placeholder="Enter email" onChange={handleOnChange} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='Password' placeholder="********" onChange={handleOnChange} required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name='confirmPassword' placeholder="********" onChange={handleOnChange} required/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}
