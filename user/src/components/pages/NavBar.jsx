import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const Navbar = ({ profile, handleLogout, loading, handleCartClick, cartLoading }) => {
  const getActiveClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link';

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "green" }}>
      <div className="container-fluid">

        {/* Navbar Toggler for mobile view */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src="list.png" alt="..." style={{ width: "30px", height: "40px" }} />
        </button>

        {/* Centered Navbar Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/services">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/portfolio">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/gallery">Gallery</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/shop">Shop</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/blog">News</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/ourwork">Our Work</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={getActiveClass} to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        {/* Right-aligned profile and cart section */}
        <div className="d-flex ml-auto align-items-center">
          {loading ? (
            <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : profile ? (
            <>
              <NavLink className="nav-link" to="/profile">
                <span className="navbar-text text-dark me-3">Welcome, {profile.fullname}</span>
              </NavLink>
              <button className="btn btn-danger custom-button" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/user">
                <button className="btn btn-success custom-button me-2">SignIn</button>
              </NavLink>
            </>
          )}
          <NavLink to="/addtocart" className="btn btn-light custom-button" onClick={handleCartClick} disabled={cartLoading}>
            {cartLoading ? (
              <div className="spinner-border spinner-border-sm text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <>
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                <span> Cart</span>
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
