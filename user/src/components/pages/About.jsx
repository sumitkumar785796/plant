import React from 'react'

const About = () => {
  return (
    <>
      {/* ##### About Area Start ##### */}
      <section className="about-us-area section-padding-100-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              {/* Section Heading */}
              <div className="section-heading">
                <h2>ABOUT US</h2>
                <p>We are leading in the plants service fields.</p>
              </div>

              <div className="mb-50">
                {/* Single Progress Bar */}
                <div className="mb-3">
                  <p>Office plants</p>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      80%
                    </div>
                  </div>
                </div>
                {/* Single Progress Bar */}
                <div className="mb-3">
                  <p>Field manager</p>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      70%
                    </div>
                  </div>
                </div>
                {/* Single Progress Bar */}
                <div className="mb-3">
                  <p>Landscape design</p>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                      85%
                    </div>
                  </div>
                </div>
                {/* Single Progress Bar */}
                <div className="mb-3">
                  <p>Garden Care</p>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '65%' }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                      65%
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-12 col-lg-6">
              <div className="alazea-benefits-area">
                <div className="row">
                  {/* Single Benefits Area */}
                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b1.png" alt="" />
                      <h5>Quality Products</h5>
                      <p style={{textAlign:"justify"}}>

                        We ensure top-notch plants with robust health, vibrant growth, and resilience. Each plant is meticulously cared for, delivering excellence.
                      </p>
                    </div>
                  </div>
                  {/* Single Benefits Area */}
                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b2.png" alt="" />
                      <h5>Perfect Service</h5>
                      <p style={{textAlign:"justify"}}>
                        Experience unmatched service with our dedicated team, offering prompt, efficient, and friendly support to meet all your needs seamlessly.
                      </p>
                    </div>
                  </div>
                  {/* Single Benefits Area */}
                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b3.png" alt="" />
                      <h5>100% Natural</h5>
                      <p style={{textAlign:"justify"}}>
                        Our products are crafted from pure, natural ingredients, ensuring authenticity and quality without additives or artificial components.
                      </p>
                    </div>
                  </div>
                  {/* Single Benefits Area */}
                  <div className="col-12 col-sm-6">
                    <div className="single-benefits-area">
                      <img src="img/core-img/b4.png" alt="" />
                      <h5>Environmentally friendly</h5>
                      <p style={{textAlign:"justify"}}>
                        Our products are designed with sustainability in mind, using eco-friendly materials and practices to minimize environmental impact and promote conservation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="border-line" />
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Area End ##### */}
    </>
  )
}

export default About