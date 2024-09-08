import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'

const AddToCart = () => {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center" style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}>
                    <h2>Add To Cart</h2>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <NavLink to="/"><i className="fa fa-home" /> Home</NavLink>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Add To Cart</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <Cart/>
        </>
    )
}

export default AddToCart