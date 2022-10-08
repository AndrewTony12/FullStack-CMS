import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Header = () => {
  // const [search,setSearch] = useState([])

  // const handleOnChange = (e)=>{
  //   const {name,value}= e.target
  //   setSearch({...search,[name]: value})
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Shooters</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
        <InputGroup className="mt-1 w-25">
          {/* <InputGroup.Text id="basic-addon1">@</InputGroup.Text> */}
          <Form.Control 
          // onChange={handleOnChange}
          // name="search"
            placeholder="Search brands,products"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Nav className="py-1">
          <Nav.Link href="#features">Categories</Nav.Link>
          <Nav.Link href="#pricing">Specials</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Login</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};
