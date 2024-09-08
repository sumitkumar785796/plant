import React from 'react'

const Portfolio = () => {
  return (
    <>
    {/* ##### Portfolio Area Start ##### */}
    <section className="alazea-portfolio-area section-padding-100-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          {/* Section Heading */}
          <div className="section-heading text-center">
            <h2>OUR PORTFOLIO</h2>
            <p>We devote all of our experience and efforts for creation</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="alazea-portfolio-filter">
            <div className="portfolio-filter">
              <button className="btn active" data-filter="*">All</button>
              <button className="btn" data-filter=".design">Coffee Design</button>
              <button className="btn" data-filter=".garden">Garden</button>
              <button className="btn" data-filter=".home-design">Home Design</button>
              <button className="btn" data-filter=".office-design">Office Design</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row alazea-portfolio">
        {/* Single Portfolio Area */}
        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design home-design wow fadeInUp" data-wow-delay="100ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/16.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/16.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 1">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
        {/* Single Portfolio Area */}
        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/17.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/17.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 2">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
        {/* Single Portfolio Area */}
        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden design wow fadeInUp" data-wow-delay="300ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/18.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/18.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 3">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
        {/* Single Portfolio Area */}
        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden office-design wow fadeInUp" data-wow-delay="400ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/19.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/19.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 4">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
        {/* Single Portfolio Area */}
        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item design office-design wow fadeInUp" data-wow-delay="100ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/20.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/20.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 5">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
        {/* Single Portfolio Area */}
        <div className="col-12 col-sm-6 col-lg-3 single_portfolio_item garden wow fadeInUp" data-wow-delay="200ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/21.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/21.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 6">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
        {/* Single Portfolio Area */}
        <div className="col-12 col-lg-6 single_portfolio_item home-design wow fadeInUp" data-wow-delay="300ms">
          {/* Portfolio Thumbnail */}
          <div className="portfolio-thumbnail bg-img" style={{backgroundImage: 'url(img/bg-img/22.jpg)'}} />
          {/* Portfolio Hover Text */}
          <div className="portfolio-hover-overlay">
            <a href="img/bg-img/22.jpg" className="portfolio-img d-flex align-items-center justify-content-center" title="Portfolio 7">
              <div className="port-hover-text">
                <h3>Minimal Flower Store</h3>
                <h5>Office Plants</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ##### Portfolio Area End ##### */}
    </>
  )
}

export default Portfolio