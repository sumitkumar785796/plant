import React from "react";
import {Link} from "react-router-dom"
const OrderStore = ({
  id,
  userId,
  userIdEmail,
  status,
  paymentMethod,
  totalPayment,
}) => {
  return (
    <>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <div className="me-4">
              <img
                src="../assets/images/profile/user1.jpg"
                width={50}
                className="rounded-circle"
                alt=""
              />
            </div>
            <div>
              <h6 className="mb-1 fw-bolder">{userId}</h6>
              <p className="fs-3 mb-0">{userIdEmail}</p>
            </div>
          </div>
        </td>
        <td>
          <p className="fs-3 fw-normal mb-0">{paymentMethod}</p>
        </td>
        <td>
          <p className="fs-3 fw-normal mb-0 text-success">₹ {totalPayment}</p>
        </td>
        <td>
          <span className="badge bg-light-success rounded-pill text-success px-3 py-2 fs-3">
            {status === "0" ? (
              <h6 style={{ color: "red" }}>Pending</h6>
            ) : status === "1" ? (
              <h6 style={{ color: "blue" }}>Processing</h6>
            ) : (
              <h6 style={{ color: "green" }}>Delivered</h6>
            )}
          </span>
        </td>
        <td>
         <Link to={`/admin/${id}`} className="btn btn-primary">View all Orders</Link>
        </td>
      </tr>
    </>
  );
};

export default OrderStore;
