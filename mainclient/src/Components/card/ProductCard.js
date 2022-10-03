import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Layout } from '../../Pages/layout/Layout';
import "./product.css"
const url = "http://localhost:8000/"
export const ProductCard = ({info}) => {
  console.log(info);
  return (
    <div>
      <Container>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              crossOrigin='anonymous'
              src={url+info.thumbnail}
              className="imgs"
            />
            {/* <img src={url + info?.thum  bnail} />  */}
            {console.log(info.thumbnail)}
            <Card.Body>
              <Card.Title>{info.name}</Card.Title>
              <Card.Text>{info.description}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
