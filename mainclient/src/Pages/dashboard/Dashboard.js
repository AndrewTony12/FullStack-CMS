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
        <div class="d-flex flex-column h-100">
          {/* <!-- FOR DEMO PURPOSE --> */}
          <section class="hero text-black py-5 flex-grow-1">
            <div class="container py-4">
              <div class="row">
                <div class="col-lg-6">
                  <h1 class="display-4">Categories</h1>
                  <p class="fst-italic text-muted">
                    Using Bootstrap 5 flexbox utilities, create a footer that
                    always sticks to the bottom of your viewport. Snippet by{" "}
                    <a
                      class="text-primary"
                      href="https://bootstrapious.com/"
                      target="_blank"
                    >
                      Bootstrapious
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
}
