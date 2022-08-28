import React from "react";
import { ProductForm } from "../../components/product-form/ProductForm";
import { AdminLayout } from "../../layout/AdminLayout";

const NewProduct = () => {
  return (
    <AdminLayout>
      <h3 className="mt-3">Add new product</h3>
      <hr />
      <ProductForm />
    </AdminLayout>
  );
};

export default NewProduct;
