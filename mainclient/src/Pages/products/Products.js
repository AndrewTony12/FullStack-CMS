import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ProductList } from '../../Components/product/ProductList'
import { useDispatch } from "react-redux";
import { Layout } from '../layout/Layout'
import { productsAction } from './ProductAction';
import { ProductCard } from '../../Components/card/ProductCard';

const Products = () => {
return (
  <Layout>
    <ProductList />
  </Layout>
);
}
export default Products
