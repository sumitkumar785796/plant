import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ViewStore from './ViewStore';
import ReactPaginate from 'react-paginate'; // Import pagination component

const ViewBlogs = () => {
    const [view, setView] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2; // Number of items per page

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get("/api/blog");
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
                                View Blogs
                            </h5>
                            {loading ? (
                                <div className="container">
                                    <img src="../assets/images/loading.gif" alt="loading" />
                                </div>
                            ) : (
                                <>
                                    <div className="row">
                                        {slicedView.map((element, index) => (
                                            <ViewStore
                                                key={index}
                                                id={element._id}
                                                blogname={element.blogname}
                                                description={element.description}
                                                image={element.image}
                                            />
                                        ))}
                                    </div>
                                    {/* Pagination */}
                                    <div className="d-flex justify-content-center mt-4">
                                        <ReactPaginate
                                            pageCount={pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageChange}
                                            containerClassName="pagination justify-content-center"
                                            activeClassName="active"
                                            previousLabel={'«'}
                                            nextLabel={'»'}
                                            breakLabel={'...'}
                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}
                                            previousClassName={'page-item'}
                                            previousLinkClassName={'page-link'}
                                            nextClassName={'page-item'}
                                            nextLinkClassName={'page-link'}
                                            breakClassName={'page-item'}
                                            breakLinkClassName={'page-link'}
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

export default ViewBlogs;
