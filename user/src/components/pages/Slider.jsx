import React from 'react';

const Slider = () => {
    return (
        <>
            {/* ##### Hero Area Start ##### */}
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="banner1.jpg" className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Manavata Nursery</h2>
                            <p style={{ color: 'white' }}>Manavata Nursery specializes in cultivating and selling a wide variety of plants, providing essential resources and expertise for gardening and landscaping...</p>
                            <div className="welcome-btn-group">
                                <a href="/shop" className="btn btn-success">GET STARTED</a>
                                <a href="/contact" className="btn btn-danger">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="banner2.jpg" className="d-block w-100 img-fluid" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h2>Manavata Nursery</h2>
                            <p style={{ color: 'white' }}>Manavata Nursery specializes in cultivating and selling a wide variety of plants, providing essential resources and expertise for gardening and landscaping...</p>
                            <div className="welcome-btn-group">
                                <a href="/shop" className="btn btn-success">GET STARTED</a>
                                <a href="/contact" className="btn btn-danger">CONTACT US</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </a>
            </div>
            {/* ##### Hero Area End ##### */}
        </>
    );
}

export default Slider;
