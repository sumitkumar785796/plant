import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductStore from '../pages/product/ProductStore'; // Import ProductStore component
import { Link } from 'react-router-dom'
const Product = () => {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const resp = await axios.get('/api/viewnewplant');
        setView(resp.data.data); // Set the view state with the fetched data
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {/* ##### Product Area Start ##### */}
      <section className="new-arrivals-products-area bg-gray section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2>NEW ARRIVALS</h2>
                <p>We have the latest products, it must be exciting for you</p>
              </div>
            </div>
          </div>
          <div className="row">
            {loading ? (
              <div className="container text-center">
                <img src="loadings.gif" alt="loading" />
              </div>
            ) : view.length > 0 ? (
              view.map((element) => (
                <ProductStore
                  key={element._id}
                  id={element._id}
                  qty={1} // Default quantity
                  plantname={element.plantname}
                  image={element.image}
                  price={element.price}
                  categories={element.category} // Assuming categories are needed
                />
              ))
            ) : (
              <div className="col-12 text-center">
                <p>No plants found in this category.</p>
              </div>
            )}
          </div>
          <div className="col-12 text-center">
            <Link to="/shop" className="btn alazea-btn">View All</Link>
          </div>
        </div>
      </section>
      {/* ##### Product Area End ##### */}
    </>
  );
};

export default Product;
