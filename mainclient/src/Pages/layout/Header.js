import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const Header = () => {
  // const [search,setSearch] = useState([])

  // const handleOnChange = (e)=>{
  //   const {name,value}= e.target
  //   setSearch({...search,[name]: value})
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Nav.Link>
          <Link to="/dashboard#" className="links">
            SHOOTERS
          </Link>
        </Nav.Link>

        <InputGroup className="mt-1 w-25">
          <Form.Control
            placeholder="Search brands,products"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <Nav className="py-1">
          <Nav.Item as="li">
            {/* <Nav.Link href="/home">Active</Nav.Link> */}
            <Nav.Link>
              <Link to="/products" className="links">
                Products
              </Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/categories" className="links">Category</Link>
            </Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link>
              <Link to="/" className="links">Login</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};
