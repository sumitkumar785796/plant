import React from "react";

const Services = () => {
  return (
    <>
      {/* ##### Service Area Start ##### */}
      <section className="our-services-area bg-gray section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Heading */}
              <div className="section-heading text-center">
                <h2 id="service">OUR SERVICES</h2>
                <p>We provide the perfect service for you.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="alazea-service-area mb-100">
                {/* Single Service Area */}
                <div
                  className="single-service-area d-flex align-items-center wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  {/* Icon */}
                  <div className="service-icon mr-30">
                    <img src="img/core-img/s1.png" alt="" />
                  </div>
                  {/* Content */}
                  <div className="service-content">
                    <h5>Plants Care</h5>
                    <p>
                      Proper plant care includes regular watering, adequate
                      sunlight, well-drained soil, and occasional fertilization
                      to ensure healthy, thriving plants.
                    </p>
                  </div>
                </div>
                {/* Single Service Area */}
                <div
                  className="single-service-area d-flex align-items-center wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  {/* Icon */}
                  <div className="service-icon mr-30">
                    <img src="img/core-img/s2.png" alt="" />
                  </div>
                  {/* Content */}
                  <div className="service-content">
                    <h5>Pressure Washing</h5>
                    <p>
                      Pressure washing removes dirt, grime, and mildew from
                      surfaces using high-pressure water. It’s effective for
                      cleaning driveways, decks, and buildings.
                    </p>
                  </div>
                </div>
                {/* Single Service Area */}
                <div
                  className="single-service-area d-flex align-items-center wow fadeInUp"
                  data-wow-delay="500ms"
                >
                  {/* Icon */}
                  <div className="service-icon mr-30">
                    <img src="img/core-img/s3.png" alt="" />
                  </div>
                  {/* Content */}
                  <div className="service-content">
                    <h5>Tree Service &amp; Trimming</h5>
                    <p>
                      Tree service and trimming involve pruning, shaping, and
                      maintaining trees to enhance health, appearance, and
                      safety, ensuring optimal growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="alazea-video-area bg-overlay mb-100">
                <div className="embed-responsive embed-responsive-16by9">
                  <video className="embed-responsive-item" controls>
                    <source src="../img/imggif.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Service Area End ##### */}
    </>
  );
};

export default Services;
