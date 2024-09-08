import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OrderStore from './OrderStore';
import Pagination from 'react-paginate';

const OrderDetails = () => {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get("/api/order");
        setView(resp.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handlePageChange = (data) => {
    setCurrentPage(data.selected + 1);
  };

  const pageCount = Math.ceil(view.length / itemsPerPage);

  const slicedView = view.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="row">
        <div className="col-lg-12 d-flex align-items-stretch">
          <div className="card w-100">
            <div className="card-body p-4">
              <div className="d-flex mb-4 justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold">Order Details</h5>
                <div className="dropdown">
                  {/* Dropdown menu (unchanged) */}
                </div>
              </div>
              <div className="table-responsive" data-simplebar>
                <table className="table table-borderless align-middle text-nowrap">
                  <thead>
                    <tr>
                      <th scope="col">User Name</th>
                      <th scope="col">Payment Method</th>
                      <th scope="col">Total Payment</th>
                      <th scope="col">Status</th>
                      <th scope="col">View All Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <tr>
                        <td colSpan="5" className="text-center">
                          <img src="../assets/images/loading.gif" alt="loading" />
                        </td>
                      </tr>
                    ) : (
                      slicedView.map((item, index) => (
                        <OrderStore
                          key={item._id}
                          id={item._id}
                          itemDetails={item.itemDetails}
                          userId={item.userId.fullname}
                          userIdEmail={item.userId.email}
                          totalPayment={item.totalPayment}
                          paymentMethod={item.paymentMethod}
                          transactionId={item.transactionId}
                          status={item.status}
                        />
                      ))
                    )}
                  </tbody>
                </table>
              </div>
              <div className="d-flex justify-content-center mt-4">
                <Pagination
                  pageCount={pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  initialPage={currentPage - 1}
                  containerClassName="pagination justify-content-center"
                  pageClassName="page-item"
                  pageLinkClassName="page-link"
                  previousClassName="page-item"
                  previousLinkClassName="page-link"
                  nextClassName="page-item"
                  nextLinkClassName="page-link"
                  breakClassName="page-item"
                  breakLinkClassName="page-link"
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
