import React from 'react'
import { Outlet } from "react-router-dom";
import Footer from '../Footer';
const Layout = () => {
  return (
    <>
    {/* ##### Breadcrumb Area Start ##### */}
    <div className="breadcrumb-area">
    {/* Top Breadcrumb Area */}
    <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
        <h2>Login and Registration</h2>
    </div>
</div>
<br />
{/* ##### Breadcrumb Area End ##### */}
<Outlet/>
<Footer/>
    </>
  )
}

export default Layout