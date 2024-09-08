import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const CheckOut = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [view, setView] = useState([]);
  const [input, setInput] = useState({
    fname: "",
    mobile: "",
    pincode: "",
    locality: "",
    address: "",
    city: "",
    state: "",
    userId: "",
  });
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const { getuser } = useContext(AuthContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (getuser) {
      setProfile(getuser);
      fetchUserAddresses(getuser._id); // Fetch addresses when user is set
    }
  }, [getuser]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(items);
  }, []);

  const fetchUserAddresses = async (userId) => {
    try {
      const res = await axios.get("/api/saveaddress", { params: { userId } });
      const filteredAddresses = res.data.data.filter(
        (address) => address.userId === userId
      );
      setView(filteredAddresses);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotal = (price, quantity) => {
    return price * (quantity ?? 1);
  };

  const calculateSubtotal = () => {
    const subtotal = cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity || item.price);
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

  const ChangeInput = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const HandleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const currentTime = new Date().toLocaleString();
      const formData = {
        ...input,
        time: currentTime,
        userId: profile._id,
      };
      const res = await axios.post("/api/saveaddress", formData);
      toast.success(res.data.message);
      setInput({
        fname: "",
        mobile: "",
        pincode: "",
        locality: "",
        address: "",
        city: "",
        state: "",
        userId: "",
      });
      fetchUserAddresses(profile._id); // Refresh address list after submission
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.errors) {
          errorData.errors.forEach((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(errorData.message || 'An error occurred');
        }
      } else {
        console.error('An error occurred:', error);
        toast.error('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleOrderSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!selectedAddress) {
        toast.error("Please select a shipping address");
        return;
      }
      if (!selectedPaymentMethod) {
        toast.error("Please select a payment method");
        return;
      }
      if (selectedPaymentMethod === 'Online' && !transactionId) {
        toast.error("Transaction ID is required for online payment");
        return;
      }

      // Prepare the order data
      const orderData = {
        addressId: selectedAddress._id,
        userId: profile._id,
        itemDetails: cartItems,
        paymentMethod: selectedPaymentMethod,
        totalPayment: calculateSubtotal() + calculateShipping(),
        transactionId: selectedPaymentMethod === 'Online' ? transactionId : null // Only include transactionId if payment method is 'Online'
      };

      // Make the API request
      const response = await axios.post("/api/order", orderData);

      // Clear the cart and navigate to success page
      localStorage.removeItem('cartItems');
      navigate('/successorder');
      toast.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        const errorData = error.response.data;
        if (errorData.errors) {
          errorData.errors.forEach((error) => {
            toast.error(error.msg);
          });
        } else {
          toast.error(errorData.message || 'An error occurred');
        }
      } else {
        console.error('An error occurred:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <>
      <div className="breadcrumb-section bg-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <h1>Check Out Product</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Add New Address
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <form onSubmit={HandleSubmit}>
                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="Name"
                              className="form-control"
                              name="fname"
                              onChange={ChangeInput}
                              value={input.fname}
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="10 digit Mobile Number"
                              className="form-control"
                              name="mobile"
                              onChange={ChangeInput}
                              value={input.mobile}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="Pincode"
                              className="form-control"
                              name="pincode"
                              onChange={ChangeInput}
                              value={input.pincode}
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="Locality"
                              className="form-control"
                              name="locality"
                              onChange={ChangeInput}
                              value={input.locality}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-12">
                            <input
                              type="text"
                              placeholder="Address (Area and Street)"
                              className="form-control"
                              name="address"
                              onChange={ChangeInput}
                              value={input.address}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="City/District/Town"
                              className="form-control"
                              name="city"
                              onChange={ChangeInput}
                              value={input.city}
                            />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="text"
                              placeholder="State"
                              className="form-control"
                              name="state"
                              onChange={ChangeInput}
                              value={input.state}
                            />
                          </div>
                        </div>
                        <div className="text-center">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={loading}
                          >
                            {loading ? "Submitting..." : "Submit Address"}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="address-selection my-4">
                <h2>Select Address</h2>
                <div className="list-group">
                  {view.map((address) => (
                    <div
                      key={address._id}
                      className={`list-group-item list-group-item-action ${selectedAddress?._id === address._id ? 'active' : ''}`}
                      onClick={() => setSelectedAddress(address)}
                    >
                      <h5>{address.fname}</h5>
                      <p>{address.address}, {address.locality}, {address.city}, {address.state} - {address.pincode}</p>
                      <p>Mobile: {address.mobile}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="payment-method my-4">
                <h2>Payment Method</h2>
                <div className="form-check">
                  
                  <input
                    type="radio"
                    className="form-check-input"
                    id="paymentMethod1"
                    name="paymentMethod"
                    value="Online"
                    checked={selectedPaymentMethod === 'Online'}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="paymentMethod1">
                    Online Payment
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    id="paymentMethod2"
                    name="paymentMethod"
                    value="Cash on Delivery"
                    checked={selectedPaymentMethod === 'Cash on Delivery'}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="paymentMethod2">
                    Cash on Delivery
                  </label>
                </div>
                {selectedPaymentMethod === 'Online' && (
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Transaction ID"
                      value={transactionId}
                      onChange={(e) => setTransactionId(e.target.value)}
                    />
                    <img src="qr.jpg" alt="qr"/>
                  </div>
                )}
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="order-details-wrap">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Your order Details</th>
                      <th>Plant Name</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={`upload/${item.image}`}
                            alt={item.plantname}
                            style={{ width: "100px", height: "auto" }}
                          />
                        </td>
                        <td>{item.plantname}</td>
                        <td>
                          &#8377;{calculateTotal(item.price, item.quantity || 1)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>Subtotal</td>
                      <td>&#8377;{calculateSubtotal()}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>&#8377;{calculateShipping()}</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>&#8377;{calculateSubtotal() + calculateShipping()}</td>
                    </tr>
                  </tfoot>
                </table>
                <button
                  className="btn btn-primary"
                  onClick={handleOrderSubmit}
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default CheckOut;
