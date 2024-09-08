import React from 'react';
import './StorePlant.css';
import { NavLink } from 'react-router-dom';
const StorePlant = ({ id,stockStatus, image, plantname, price, categories, qty }) => {
  // Determine the style based on stock status
  const getStockStatusClass = (status) => {
    switch (status) {
      case 'Low Stock':
        return 'low-stock';
      case 'Not Available':
        return 'not-available';
      default:
        return 'available';
    }
  };
  return (
    <>
      <div className="col-sm-6 col-xl-3">
        <div className={`card ${getStockStatusClass(stockStatus)}`}>
          <div className="position-relative">
            <img src={`../../upload/${image}`} className="card-img-top rounded-0" alt={plantname} />

            <NavLink to={`/admin/addplant/${id}`} className="bg-primary rounded-circle p-2 text-white d-inline-flex position-absolute bottom-0 end-0 mb-n3 me-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add To Cart">
              Edit
            </NavLink>
          </div>
          <div className="card-body pt-3 p-4">
            <h6 className="fw-semibold fs-4">{plantname}</h6>
            <p className="text-muted">Price: ₹{price}</p>
            <p className="text-muted">Quantity: {qty}</p>
            <p className="text-muted">
              Categories: {categories}
            </p>
            <p className="text-muted">
              Stock: {stockStatus}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePlant;
