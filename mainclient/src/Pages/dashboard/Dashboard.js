import React from 'react'
import { Layout } from '../layout/Layout';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row } from 'react-bootstrap';
import "./Dashboard.css"
import Products from '../products/Products';
import { useSelector } from 'react-redux';
import { ProductCard } from '../../Components/card/ProductCard';



export const Dashboard = () => {
    const { products } = useSelector((state) => state.products);

  return (
    <div>
      <Layout>
  
       
      </Layout>
    </div>
  );
}
