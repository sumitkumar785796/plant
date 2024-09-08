import React, { useEffect, useState } from 'react';
import StoreProduct from './StoreProduct';
import axios from 'axios';
import Pagination from 'react-paginate'; // Import Pagination component

const ViewProduct = () => {
    const [view, setView] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const itemsPerPage = 8; // Number of items per page

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/viewcategorie");
                setView(res.data.data);
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
            <div className="container-fluid">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold mb-4">
                                View Categories
                            </h5>
                            {loading ? (
                                <div className="container text-center">
                                    <img src="../assets/images/loading.gif" alt="loading" />
                                </div>
                            ) : (
                                <>
                                    <div className="row">
                                        {slicedView.map((element, index) => (
                                            <StoreProduct
                                                key={index}
                                                id={element._id}
                                                categoryname={element.categoryname}
                                                image={element.image}
                                            />
                                        ))}
                                    </div>
                                    {/* Add Pagination component */}
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewProduct;
