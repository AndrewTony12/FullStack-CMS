import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/product-table/ProductTable";
import { AdminLayout } from "../../layout/AdminLayout";

const Products = () => {
  return (
    <AdminLayout>
      <h1 className="mt-5">Products</h1>

      <div className="text-end">
        <Link to="/product/new">
          <Button variant="primary">
            <i className="fa-solid fa-plus"></i> Add New Product
          </Button>
        </Link>
      </div>
      <hr />
      <div className="product-list">
        {/* put table component to display all the products */}
        <ProductTable />
      </div>
    </AdminLayout>
  );
};

export default Products;
