import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
const SortingSidebar = () => {
  const [view, setView] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      {/* Sidebar Area */}
      <div className="col-12 col-md-4 col-lg-3">
        <div className="shop-sidebar-area">
          <div className="shop-widget catagory mb-50">
            {loading ? (
              <div className="container">
                {/* <img src="circle.gif" alt="loading" /> */}
                loading...
              </div>
            ) : view.length > 0 ? (
              <>
                <h4 className="widget-title" style={{fontSize:"30px",fontWeight:"800"}}>Categories</h4>
                <div className="widget-desc">
                  {view.map((category) => (
                    <div
                      key={category._id}
                      className="custom-control custom-checkbox d-flex align-items-center mb-2"
                    >
                        <img src={`upload/${category.image}`} alt="" style={{width:"60px",height:"60px",borderRadius:"50%"}} />
                        <Link to={`/shop/${category._id}`} style={{fontSize:"25px"}}>
                        {category.categoryname}
                        </Link>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="col-12">
                <p>No categories found.</p>
              </div>
            )}
          </div>
          {/* Shop Widget */}
        </div>
      </div>
    </>
  );
};

export default SortingSidebar;
