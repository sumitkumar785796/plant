import React from 'react';
import {NavLink} from "react-router-dom"
const MiddleBar = () => {
    return (
        <div className="text-white py-2" style={{backgroundColor:"white"}}>
            <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center" style={{ height: "auto", padding: "10px" }}>
                {/* Left: Social Links */}
                <NavLink to='/'>
                <div className="d-flex flex-column flex-md-row align-items-center">
                    <img 
                        src="../logos.png" 
                        alt="logo" 
                        className="img-fluid" 
                        style={{ maxWidth: "150px", height: "auto", marginRight: "10px" }} 
                    />
                    <div className="text-center text-md-left">
                        <h2 style={{color:"green", fontWeight:"800", fontSize: "1.5rem"}}>
                            MANAVTA NURSERY &nbsp;&nbsp; मानवता नर्सरी
                            <br />
                            घर घर हरियाली से गरीब के घर खुशहाली
                        </h2>
                    </div>
                </div>
                </NavLink>
            </div>
        </div>
    );
}

export default MiddleBar;
