import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Categories.css"
import shoe from "./images/shoe.jpeg"
import ladies from "./images/women23.jpeg"
import kid from "./images/kids2.jpeg"
import sale from "./images/sale2.jpeg"

export const Categories = () => {
  return (
    <div className='p-5'>
      <div class="d-flex flex-column h-100 p-5 ">
        <h1 class="display-4 text-center">Categories</h1>
      </div>

      {/* // category cards */}
      <div className="cardP">
        {/* mens */}
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={shoe} />
            <Card.Body>
              <Card.Title className='text-center'>Mens</Card.Title>
              {/* <Card.Text>
                Ultimate footwear collections for different occasions.
              </Card.Text> */}
              <Button  variant="dark">Shop Now</Button>
            </Card.Body>
          </Card>
        </div>

        {/* women */}
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={ladies} />
            <Card.Body>
              <Card.Title>Womens</Card.Title>
              {/* <Card.Text>
                Ultimate footwear collections for different occasions.
              </Card.Text> */}
              <Button variant="dark">Shop Now</Button>
            </Card.Body>
          </Card>
        </div>

        {/* kids */}
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={kid} />
            <Card.Body>
              <Card.Title>Kids</Card.Title>
              {/* <Card.Text>
                Ultimate footwear collections for different occasions.
              </Card.Text> */}
              <Button variant="dark">Shop Now</Button>
            </Card.Body>
          </Card>
        </div>

        {/* sale */}
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={sale} />
            <Card.Body>
              <Card.Title>Hot Sale</Card.Title>
              {/* <Card.Text>
                Ultimate footwear collections for different occasions.
              </Card.Text> */}
              <Button variant="dark">Shop Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
