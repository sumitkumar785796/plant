import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';

const MyOrder = () => {
    const [view, setView] = useState([]);
    const { getuser } = useContext(AuthContext);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('/api/order');
                console.log(resp.data.data);
                setView(resp.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (getuser) {
            setProfile(getuser);
        }
    }, [getuser]);

    const formatMonthName = (monthIndex) => {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return months[monthIndex];
    };

    const formatTime = (hours, minutes) => {
        const hour = hours % 12 || 12;
        const period = hours < 12 ? 'AM' : 'PM';
        return `${hour}:${String(minutes).padStart(2, '0')} ${period}`;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        return `${day} ${formatMonthName(monthIndex)} ${year} at ${formatTime(hours, minutes)}`;
    };

    return (
        <div className="container">
            <div className="row">
                {view && profile && view
                    ?.filter((ele) => ele.userId && ele.userId._id === profile._id)
                    ?.map((ele, index) => (
                        <div className="col-sm-12" key={index}>
                            <h2 style={{ color: "greenyellow", fontWeight: "900" }}>
                                Order List - {" " + formatDate(ele.createdAt)}
                            </h2>
                            <h5>
                                <div className="row">
                                    {ele.itemDetails.map((item, index) => (
                                        <div className="col-sm-4" key={index}>
                                            <img src={`upload/${item.image}`} alt={item.plant} style={{ width: '100%', height: '50vh' }} />
                                            <br />
                                            <br />
                                            <h4>Order Number</h4>
                                            <h6>{ele._id}</h6>
                                            <h3>{item.plantname}</h3>
                                            <h4>&#8377;{item.price}</h4>
                                            <h4>Quantity: {item.quantity || 1}</h4>
                                        </div>
                                    ))}
                                </div>
                            </h5>
                            <h4>Total Price &#8377;{ele.totalPayment}</h4>
                            <h4>
                                {ele.paymentMethod === "Cash on Delivery" ?
                                    <span className='btn btn-danger'>Cash on Delivery</span> :
                                    <span className='btn btn-success'>Online</span>}
                            </h4>
                            <h4>
                                Status {ele.status === "0" ? (
                                    <span style={{ color: 'red' }}>Pending</span>
                                ) : ele.status === "1" ? (
                                    <span style={{ color: 'blue' }}>Processing</span>
                                ) : (
                                    <span style={{ color: 'green' }}>Delivered</span>
                                )}
                            </h4>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyOrder;
