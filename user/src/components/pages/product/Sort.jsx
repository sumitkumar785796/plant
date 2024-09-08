import React from 'react'

const Sort = () => {
  return (
    <>
     {/* Shop Widget */}
     <div className="shop-widget sort-by mb-50">
     <h4 className="widget-title">Sort by</h4>
     <div className="widget-desc">
       {/* Single Checkbox */}
       <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
         <input
           type="checkbox"
           className="custom-control-input"
           id="customCheck7"
         />
         <label className="custom-control-label" htmlFor="customCheck7">
           New arrivals
         </label>
       </div>
       {/* Single Checkbox */}
       <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
         <input
           type="checkbox"
           className="custom-control-input"
           id="customCheck8"
         />
         <label className="custom-control-label" htmlFor="customCheck8">
           Alphabetically, A-Z
         </label>
       </div>
       {/* Single Checkbox */}
       <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
         <input
           type="checkbox"
           className="custom-control-input"
           id="customCheck9"
         />
         <label className="custom-control-label" htmlFor="customCheck9">
           Alphabetically, Z-A
         </label>
       </div>
       {/* Single Checkbox */}
       <div className="custom-control custom-checkbox d-flex align-items-center mb-2">
         <input
           type="checkbox"
           className="custom-control-input"
           id="customCheck10"
         />
         <label className="custom-control-label" htmlFor="customCheck10">
           Price: low to high
         </label>
       </div>
       {/* Single Checkbox */}
       <div className="custom-control custom-checkbox d-flex align-items-center">
         <input
           type="checkbox"
           className="custom-control-input"
           id="customCheck11"
         />
         <label className="custom-control-label" htmlFor="customCheck11">
           Price: high to low
         </label>
       </div>
     </div>
   </div>
   
          {/* Shop Widget */}
          <div className="shop-widget best-seller mb-50">
            <h4 className="widget-title">Best Seller</h4>
            <div className="widget-desc">
              {/* Single Best Seller Products */}
              <div className="single-best-seller-product d-flex align-items-center">
                <div className="product-thumbnail">
                  <a href="shop-details.html">
                    <img src="img/bg-img/4.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href="shop-details.html">Cactus Flower</a>
                  <p>₹ 199</p>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {/* Single Best Seller Products */}
              <div className="single-best-seller-product d-flex align-items-center">
                <div className="product-thumbnail">
                  <a href="shop-details.html">
                    <img src="img/bg-img/5.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href="shop-details.html">Tulip Flower</a>
                  <p>₹ 199</p>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              {/* Single Best Seller Products */}
              <div className="single-best-seller-product d-flex align-items-center">
                <div className="product-thumbnail">
                  <a href="shop-details.html">
                    <img src="img/bg-img/34.jpg" alt="" />
                  </a>
                </div>
                <div className="product-info">
                  <a href="shop-details.html">Recuerdos Plant</a>
                  <p>₹ 999</p>
                  <div className="ratings">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Sort