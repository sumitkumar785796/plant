import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            {/* ##### Footer Area Start ##### */}
            <footer className="footer-area bg-img" style={{ backgroundImage: 'url(img/bg-img/3.jpg)' }}>
                {/* Main Footer Area */}
                <div className="main-footer-area">
                    <div className="container">
                        <div className="row">
                            {/* Single Footer Widget */}
                            <div className="col-sm-4">
                                <div className="single-footer-widget">
                                    <div className="footer-logo mb-30">
                                        <a href="#"><img src="logos.png" alt="" /></a>
                                    </div>
                                    <p>घर घर हरियाली से <br />
                                        गरीब के घर खुशहाली</p>
                                    <div className="social-info">
                                        <a href="https://www.facebook.com/TEIFoundation?mibextid=ZbWKwL"><i className="fa fa-facebook" aria-hidden="true" /></a>
                                        <a href="https://x.com/Himansh46056633/status/1728619066410324469"><i className="fa fa-twitter" aria-hidden="true" /></a>
                                        <a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a>
                                        <a href="https://www.instagram.com/teif_9918?igsh=NjRoM3diNjVmejA3"><i className="fa fa-instagram" aria-hidden="true" /></a>
                                        <a href="https://chat.whatsapp.com/EDMT03GT1BI6JOIgV77bbS"><i className="fa fa-whatsapp" aria-hidden="true" /></a>
                                    </div>
                                </div>
                            </div>
                            {/* Single Footer Widget */}
                            <div className="col-sm-4">
                                <div className="single-footer-widget">
                                    <div className="widget-title">
                                        <h5>QUICK LINK</h5>
                                    </div>
                                    <nav className="widget-nav">
                                        <ul>
                                            <li><a href="#">Purchase</a></li>
                                            <li><a href="#">Payment</a></li>
                                            <li><a href="#">Shipping</a></li>
                                            <li><a href="#">Return</a></li>
                                            <li><a href="#">Orders</a></li>
                                            <li><a href="#service">Services</a></li>
                                            <li><a href="/blog">News</a></li>
                                            <li><a href="/shop">Plant Problem</a></li>
                                            <li><a href="/contact">Contact</a></li>
                                            <li><a href="/shop">Accessories</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            {/* Single Footer Widget */}

                            {/* Single Footer Widget */}
                            <div className="col-sm-4">
                                <div className="single-footer-widget">
                                    <div className="widget-title">
                                        <h5>CONTACT</h5>
                                    </div>
                                    <div className="contact-information">
                                        <p><span>Address:</span> Jail road Tambeswar Nagar near by Agrsen chauraha, Fatehpur, UttarPradesh 212601</p>
                                        <p><span>Phone:</span> +919918771888</p>
                                        <p><span>Email:</span>info.manavatanurssery@gmail.com</p>
                                        <p><span>Open hours:</span> Mon - Sun: 8 AM to 9 PM</p>
                                        <p><span>Happy hours:</span> Sat: 2 PM to 4 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom Area */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="border-line" />
                            </div>
                            {/* Copywrite Text */}
                            <div className="col-12 col-md-6">
                                <div className="copywrite-text">
                                    <p>© {/* Link back to rajat_singh__toma can't be removed. website is licensed under CC BY 3.0. */}
                                        Copyright © All rights reserved Manavata Nurssery 
                                        {/* | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://www.instagram.com/rajat_singh__tomar/target=" target="_blank">rajat_singh__tomar</a> */}
                                    </p>
                                </div>
                            </div>
                            {/* Footer Nav */}
                            <div className="col-12 col-md-6">
                                <div className="footer-nav">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/about">About</Link></li>
                                            <li><Link to="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* ##### Footer Area End ##### */}
        </>
    )
}

export default Footer