import React from 'react'
import { Link } from 'react-router-dom'

const ProductStore = ({ id, qty, plantname, image, price, categories }) => {
    const addToCartHandler = () => {
        // Get existing cart items from localStorage
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        // Check if the item already exists in the cart
        const isItemInCart = existingCartItems.some(item => item.id === id);
        if (isItemInCart) {
            // Item already in cart, show go to cart button
            return;
        }
        // Create a new item object
        const newItem = { id, plantname, price, image, qty };
        // Add the new item to the existing cart items
        const updatedCartItems = [...existingCartItems, newItem];
        // Store the updated cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        // Log the item data (you can remove this if not needed)
        console.log('Item added to cart:', newItem);
    };

    // Define isItemInCart here based on existing cart items
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const isItemInCart = existingCartItems.some(item => item.id === id);

    return (
        <>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-product-area mb-50">
                    {/* Product Image */}
                    <div className="product-img">
                        <img src={`../upload/${image}`} alt="" style={{ width: "100%", height: "40vh" }} />
                        <div className="product-meta d-flex">
                            <a href="#" className="wishlist-btn">
                                <i className="icon_heart_alt" />
                            </a>
                            {isItemInCart ? (

                                <Link
                                    to="/addtocart"
                                >
                                    GotoCart
                                </Link>
                            ) : (
                                <Link
                                    to={{
                                        pathname: '/addtocart',
                                        state: { id, plantname, price, image, qty }
                                    }}
                                    className="add-to-cart-btn"
                                    onClick={addToCartHandler}
                                >
                                    Add to cart
                                </Link>
                            )}
                            <a href="#" className="compare-btn"><i className="arrow_left-right_alt" /></a>
                        </div>
                    </div>
                    {/* Product Info */}
                    <div className="product-info mt-15 text-center">

                        <p>{plantname}</p>

                        <h6>₹ {price}</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductStore