import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import nike from './images/nike.png'
import adidas from  './images/adidas.png'
import converse from "./images/converse.png";
import vans from "./images/vans.png";
import reebok from "./images/Reebok.png"
import "./Brand.css"

export const Brand = () => {
  return (
    <div>
      <div className="">
        <div class="d-flex flex-column h-100 p-5 ">
          <h1 class="display-4 text-center">Shop by Brand</h1>
        </div>
      </div>
      {/* <div className="logoP d-flex"> */}
      {/* Nike */}
      {/* <div className=''>
            <img src={nike} alt="..." class="img-thumbnail"></img>
        </div> */}
      {/* Adidas */}
      {/* <div>
            <img src={adidas} alt="..." class="img-thumbnail"></img>
         
        </div> */}
      {/* New Balance */}
      {/* <div>
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src={newbalance} />
          </Card>
        </div> */}
      {/* Reebok */}
      {/* <div>
          <Card style={{ width: "10rem" }}>
            <Card.Img variant="top" src={reebok} />
          </Card>
        </div> */}
      {/* Converse */}
      {/* <div>
          
            <img src={converse} alt="..." class="img-thumbnail"></img>
        </div> */}
      {/* Vans */}
      {/* <div>
          
            <img src={vans} alt="..." class="img-thumbnail"></img>
        </div> */}
      {/* </div> */}

       <div class="containers">
      <img class="item" src={nike} alt="Example image"/>
      <img class="item" src={adidas} alt="Example image"/>
      <img class="item" src={converse} alt="Example image"/>
      <img class="item" src={vans} alt="Example image"/> 
      <img class="item" src={reebok} alt="Example image"/>
      {/* <img class="item" src="https://source.unsplash.com/random/320x240" alt="Example image"/>      */}
   </div>
    </div>
  );
}
