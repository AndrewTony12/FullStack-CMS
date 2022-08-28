import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AdminLayout } from "../../layout/AdminLayout";
import { getReviewsAction } from "./reviewAction";

const Reviews = () => {
  const dispatch = useDispatch();

  const { reviews } = useSelector((state) => state.reviews);

  useEffect(() => {
    dispatch(getReviewsAction());
  }, [dispatch]);

  return (
    <AdminLayout>
      <h4 className="py-5">Review management</h4>

      <Table striped hover bordered>
        <thead>
          <tr>
            <td>#</td>
            <td>status</td>
            <td>Product Name</td>
            <td>Reviewer</td>
            <td>Ratings</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {reviews.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>{item.status}</td>
              <td>{item.productName}</td>
              <td>{item.reviewedBy}</td>
              <td>{item.rating}</td>
              <td>...</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </AdminLayout>
  );
};

export default Reviews;
