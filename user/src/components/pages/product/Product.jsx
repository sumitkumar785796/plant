import React, { useEffect, useState } from 'react';
import ProductStore from './ProductStore';
import axios from 'axios';
import SortingSidebar from './SortingSidebar';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams(); // Removed the empty string argument
    const [loading, setLoading] = useState(true);
    const [view, setView] = useState({});
    const [plants, setPlants] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [plantsPerPage] = useState(6); // Number of plants per page

    useEffect(() => {
        const getData = async () => {
            try {
                const userData = id
                    ? (await axios.get(`/api/viewsinglecategorie/${id}`)).data.data
                    : {}; // Default to empty if no category ID

                const plantRes = await axios.get('/api/viewplant');
                const allPlants = plantRes.data.data;
                
                // Pagination logic
                const startIndex = (currentPage - 1) * plantsPerPage;
                const endIndex = startIndex + plantsPerPage;
                const paginatedPlants = id
                    ? allPlants.filter((plant) => plant.category._id === userData._id).slice(startIndex, endIndex)
                    : allPlants.slice(startIndex, endIndex);

                setView(userData);
                setPlants(paginatedPlants);
                setTotalPages(Math.ceil(allPlants.length / plantsPerPage));
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [id, currentPage]);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <>
            {/* ##### Shop Area Start ##### */}
            <section className="shop-page section-padding-0-100">
                <div className="container">
                    <div className="row">
                        {/* <SortingData/> */}
                        <div className="col-sm-4">
                            <h1></h1>
                        </div>
                        <div className="col-sm-6">
                            <h1>All Plants{view.categoryname ? `(${view.categoryname})` : ''}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <SortingSidebar />
                        {/* All Products Area */}
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="shop-products-area">
                                {loading ? (
                                    <div className="container">
                                        <img src="loadings.gif" alt="loading" />
                                    </div>
                                ) : (
                                    plants.length > 0 ? (
                                        <div className="row">
                                            {plants.map((plant) => (
                                                <ProductStore
                                                    key={plant._id}
                                                    plantname={plant.plantname}
                                                    image={plant.image}
                                                    price={plant.price}
                                                    categories={plant.category.categoryname}
                                                    id={plant._id}
                                                    qty={plant.qty}
                                                    stockStatus={plant.stockStatus}
                                                />
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="col-12">
                                            <p>No plants found in this category.</p>
                                        </div>
                                    )
                                )}
                                {/* Pagination */}
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                onClick={() => handlePageChange(currentPage - 1)}
                                                aria-disabled={currentPage === 1}
                                            >
                                                Previous
                                            </a>
                                        </li>
                                        {[...Array(totalPages).keys()].map((page) => (
                                            <li key={page + 1} className={`page-item ${page + 1 === currentPage ? 'active' : ''}`}>
                                                <a
                                                    className="page-link"
                                                    href="#"
                                                    onClick={() => handlePageChange(page + 1)}
                                                >
                                                    {page + 1}
                                                </a>
                                            </li>
                                        ))}
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                onClick={() => handlePageChange(currentPage + 1)}
                                                aria-disabled={currentPage === totalPages}
                                            >
                                                Next
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Product;
