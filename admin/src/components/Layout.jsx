import React from 'react';
import { Outlet, NavLink } from "react-router-dom";
import Footer from './pages/Footer';
import HeaderStart from './pages/HeaderStart';
const navLinkStyle = (isActive) => ({
    backgroundColor: isActive ? '#c3e2fa' : 'transparent', // Use 'transparent' for non-active links
    color: isActive ? 'black' : 'inherit', // White text color for active link
});
const Layout = () => {
    
    return (
        <>
            {/* Sidebar Start */}
            <aside className="left-sidebar">
                {/* Sidebar scroll */}
                <div className="scroll-sidebar" data-simplebar>
                    <div className="d-flex mb-4 align-items-center justify-content-between">
                        <NavLink to="/admin" className="text-nowrap logo-img ms-0 ms-md-1">
                            {/* <img src="../assets/images/logos/dark-logo.svg" width={180} alt="Logo" /> */}
                            <h2 style={{ fontWeight: "1000" }}>Admin Panel</h2>
                        </NavLink>
                        <div className="close-btn d-xl-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                            <i className="ti ti-x fs-8" />
                        </div>
                    </div>
                    {/* Sidebar navigation */}
                    <nav className="sidebar-nav">
                        <ul id="sidebarnav" className="mb-4 pb-2">
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-5" />
                                <span className="hide-menu">HOME</span>
                            </li>
                            <li className="sidebar-item">
                                <NavLink style={({ isActive }) => navLinkStyle(isActive)} className="sidebar-link sidebar-link primary-hover-bg" to="/admin" aria-expanded="false">
                                    <span className="aside-icon p-2 bg-light-primary rounded-3">
                                        <i className="ti ti-layout-dashboard fs-7 text-primary" />
                                    </span>
                                    <span className="hide-menu ms-2 ps-1">Dashboard</span>
                                </NavLink>
                            </li>
                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-5" />
                                <span className="hide-menu">PRODUCT</span>
                            </li>
                            <li className="sidebar-item">
                                <NavLink
                                    style={({ isActive }) => navLinkStyle(isActive)}
                                    className="sidebar-link sidebar-link warning-hover-bg" to="/admin/addcategories"
                                    aria-expanded="false"
                                >
                                    <span className="aside-icon p-2 bg-light-warning rounded-3">
                                        <i className="ti ti-article fs-7 text-warning" />
                                    </span>
                                    <span className="hide-menu ms-2 ps-1">
                                        Add Categories
                                    </span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink style={({ isActive }) => navLinkStyle(isActive)} className="sidebar-link sidebar-link danger-hover-bg" to="/admin/addplant" aria-expanded="false">
                                    <span className="aside-icon p-2 bg-light-danger rounded-3">
                                        <i className="ti ti-article fs-7 text-warning" />
                                    </span>
                                    <span className="hide-menu ms-2 ps-1">Add Plants</span>
                                </NavLink>
                            </li>

                            <li className="sidebar-item">
                                <NavLink style={({ isActive }) => navLinkStyle(isActive)} className="sidebar-link sidebar-link primary-hover-bg" to="/admin/viewproduct" aria-expanded="false">
                                    <span className="aside-icon p-2 bg-light-primary rounded-3">
                                        <i className="ti ti-file-description fs-7 text-primary" />
                                    </span>
                                    <span className="hide-menu ms-2 ps-1">View Product</span>
                                </NavLink>
                            </li>

                            <li className="nav-small-cap">
                                <i className="ti ti-dots nav-small-cap-icon fs-5" />
                                <span className="hide-menu">Blogs</span>
                            </li>

                            <li className="sidebar-item">
                                <NavLink style={({ isActive }) => navLinkStyle(isActive)} className="sidebar-link sidebar-link warning-hover-bg" to="/admin/addblog" aria-expanded="false">
                                    <span className="aside-icon p-2 bg-light-warning rounded-3">
                                        <i className="ti ti-login fs-7 text-warning" />
                                    </span>
                                    <span className="hide-menu ms-2 ps-1">Add Blogs</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-item">
                                <NavLink style={({ isActive }) => navLinkStyle(isActive)} className="sidebar-link sidebar-link danger-hover-bg" to="/admin/viewblog" aria-expanded="false">
                                    <span className="aside-icon p-2 bg-light-danger rounded-3">
                                        <i className="ti ti-user-plus fs-7 text-danger" />
                                    </span>
                                    <span className="hide-menu ms-2 ps-1">View Blogs</span>
                                </NavLink>
                            </li>

                        </ul>
                    </nav>
                    {/* End Sidebar navigation */}
                </div>
                {/* End Sidebar scroll */}
            </aside>
            {/* Sidebar End */}
            {/* Main wrapper */}
            <div className="body-wrapper">
                {/* Header Start */}
                <HeaderStart />
                {/* Header End */}
                <div className="container-fluid">
                    {/* Your content goes here */}
                    <Outlet />
                </div>
                {/* Footer Start */}
                <Footer />
                {/* Footer End */}
            </div>
        </>
    )
}

export default Layout;
