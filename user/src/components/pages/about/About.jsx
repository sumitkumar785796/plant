import React from 'react'
import Team from '../portifolio/Team'

const About = () => {
    return (
        <>
            {/* ##### About Area Start ##### */}
            <section className="about-us-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 col-lg-5">
                            {/* Section Heading */}
                            <div className="section-heading">
                                <h2>ABOUT US</h2>
                                <p>We are leading in the plants service fields.</p>
                            </div>
                            <p style={{ textAlign: "justify" }}>Aligned to the Sustainable Development Goals, The Emerging India Foundation runs Manavta nursery which comes under this foundation  this nursery is  started on 1 July 2022 by Dr. Himsnshu kumar and the aim of this nursery is raising fund for The emerging India foundation what's the outcome comes from this nursery we put in a poor or it iscommitted to improving the lives of marginalized communities, by leveraging the power of youth and strengthening Government systems.By focusing on the most marginalized groups within India, strengthening the ability of states to deploy impactful initiatives, and engaging youth in nation building efforts,It’s where people gather to assess your organization’s credibility and trustworthinessIt’s where people gather to assess your organization’s credibility and trustworthinessmore prospective future for all the classes of people irrespective of their caste, creed and religion. From the raise fund through manavta nursery we distribute rashan kit among 16070 people,
                                7780 clothes distrubute
                                2245+ plantation /21159  plant distribution ,
                                51005+ mask distribution,
                                55 adahar card correction,
                                7650 free medication , and come under this foundation and the nursery which is running under The emerging India foundation to raise fund from which we can help the people who are literally poor .</p>
                            {/* Progress Bar Content Area */}
                            <h1>What We Do with the Earning Money of NGO</h1>
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
            <Team/>
        </>
    )
}

export default About