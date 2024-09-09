import React from 'react';
import { NavLink } from "react-router-dom";
import './MiddleBar.css'; // Import CSS file for animations

const MiddleBar = () => {
    return (
        <div className="text-white py-2" style={{ backgroundColor: "white" }}>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ height: "auto", padding: "10px" }}>
                {/* Left: Logo */}
                <div className="d-flex align-items-center">
                    <NavLink to='/'>
                        <img
                            src="../logos.png"
                            alt="logo"
                            className="img-fluid"
                            style={{ maxWidth: "150px", height: "auto", marginRight: "10px" }}
                        />
                    </NavLink>
                </div>

                {/* Center: Heading */}
                <div className="text-center flex-grow-1">
                    <h2 style={{ color: "green", fontWeight: "800", fontSize: "2.5rem" }}>
                        MANAVTA NURSERY &nbsp;&nbsp; मानवता नर्सरी
                        <br />
                        <span className="typewriter">मिशन घर घर हरियाली से गरीब के घर खुशहाली</span>
                    </h2>
                </div>

                {/* Right: Buttons */}
                <div className="d-flex align-items-center">
                    <NavLink to="/shop" className="btn btn-success me-2">GET STARTED</NavLink>
                    <NavLink to="/contact" className="btn btn-danger">CONTACT US</NavLink>
                </div>
            </div>
        </div>
    );
};

export default MiddleBar;
