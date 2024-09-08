import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(items);
    }, []);

    const addToCart = (item) => {
        const itemWithDefaultQuantity = { ...item, quantity: 1 };
        const updatedCartItems = [...cartItems, itemWithDefaultQuantity];
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const updateQuantity = (index, quantity) => {
        if (quantity <= 0) {
            return;
        }
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity = quantity;
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const calculateTotal = (price, quantity) => {
        return price * (quantity ?? 1);
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('cartItems');
    };

    const removeItem = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const calculateSubtotal = () => {
        const subtotal = cartItems.reduce((total, item) => {
            return total + (item.price * (item.quantity || 1));
        }, 0);
        return subtotal;
    };

    const calculateShipping = () => {
        if (cartItems.length === 0) {
            return 0;
        }
        const subtotal = calculateSubtotal();
        return subtotal < 100 ? 45 : 0;
    };

    return (
        <div className="container mt-5 mb-5">
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <img src="https://res.cloudinary.com/dw2zdqu4n/image/upload/v1710011099/samples/ftmeqlmo3kbib8xst6v7.gif" alt="cart" className="img-fluid" />
                    <p className="mt-3">Please add items to your cart to continue Orders.</p>
                </div>
            ) : (
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Remove</th>
                                        <th>Product Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item, index) => (
                                        <tr key={index}>
                                            <td><button className="btn btn-danger" onClick={() => removeItem(item.id)}>Remove</button></td>
                                            <td>
                                                <img 
                                                src={`upload/${item.image}`} alt={item.plantname} className="img-thumbnail" style={{ width: '100px' }} 
                                                />
                                            </td>
                                            <td>{item.plantname}</td>
                                            <td>&#8377; {item.price}</td>
                                            <td>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value={item.quantity || 1}
                                                    onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                />
                                            </td>
                                            <td>&#8377; {calculateTotal(item.price, item.quantity || 1)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Cart Totals</h4>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal:</td>
                                            <td>&#8377; {calculateSubtotal()}</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping:</td>
                                            <td>&#8377; {calculateShipping()}</td>
                                        </tr>
                                        <tr>
                                            <td>Total:</td>
                                            <td>&#8377; {calculateSubtotal() + calculateShipping()}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex justify-content-between">
                                    <button className="btn btn-danger" onClick={clearCart}>Clear All</button>
                                    <Link to={{ pathname: '/checkout', state: { cartItems } }} className="btn btn-dark">Check Out</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
