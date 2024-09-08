import React from 'react'
import Product from './Product'
import { NavLink } from 'react-router-dom'

const Shop = () => {
    return (
        <>
            {/* ##### Breadcrumb Area Start ##### */}
            <div className="breadcrumb-area">
                {/* Top Breadcrumb Area */}
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(../img/bg-img/24.jpg)' }}>
                    <h2>Shop</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><NavLink to="/"><i className="fa fa-home" /> Home</NavLink></li>
                                    <li className="breadcrumb-item active" aria-current="page">Shop</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* ##### Breadcrumb Area End ##### */}
            <Product/>
        </>
    )
}

export default Shop