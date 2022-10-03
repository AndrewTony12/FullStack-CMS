import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { productsAction } from "../../Pages/products/ProductAction";
import { ProductCard } from "../card/ProductCard";


export const ProductList = () => {
   const dispatch = useDispatch();
   const [data, setData] = useState([]);
   const { products } = useSelector((state) => state.products);
   useEffect(() => {
     //fetch cat list if not in the state
    !data.length && dispatch(productsAction());
     products.length && setData(products);
   }, [data,dispatch,products]);
   console.log(products);
   // console.log(data);
   return (
     <div>
       <h1>Products</h1>
       <div className="container d-flex flex-wrap justify-content-center align-items-center gap-5">
         {data.map((x) => {
           return <ProductCard info={x} />;
         })}
       </div>
     </div>
   );
};
