import React, { useState, useCallback, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";

const OrderStatus = () => {
    const nav = useNavigate()
    const [view, setView] = useState({});
    const [selectedStatus, setSelectedStatus] = useState('0'); // Initialize with default status
    const { orderId } = useParams();

    const fetchData = useCallback(async () => {
        if (orderId) {
            try {
                const resp = await axios.get(`/api/order/${orderId}`);
                setView(resp.data.data);
                setSelectedStatus(resp.data.data.status); 
                // console.log(resp.data.data)
            } catch (error) {
                console.log(error);
            }
        }
    }, [orderId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const saveChanges = async () => {
        try {
            await axios.put(`/api/order/${orderId}`, { status: selectedStatus });
            fetchData(); 
            nav('/admin')
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const getStatusColor = (statusValue) => {
        switch (statusValue) {
            case '0':
                return 'red'; // Pending
            case '1':
                return 'blue'; // Processing
            case '2':
                return 'green'; // Delivered
            default:
                return 'white'; // Default color
        }
    };

    if (!view.itemDetails) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h3>Order ID: {view._id}</h3>
            <h3 style={{color:"red"}}>{view.transactionId ? `Transaction ID: ${view.transactionId}` : 'Payment is COD'}</h3>
            <div>
                <label>Status: </label>
                <select className="form-control" value={selectedStatus} onChange={handleStatusChange}>
                    <option value="0">Pending</option>
                    <option value="1">Processing</option>
                    <option value="2">Delivered</option>
                </select>
                <button className="btn btn-success" onClick={saveChanges}>Save Changes</button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Plant Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {view.itemDetails.length > 0 ? (
                        view.itemDetails.map((ele, index) => (
                            <tr key={ele._id || index}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <img
                                        src={`../upload/${ele.image}`}
                                        alt={ele.plantname}
                                        style={{ width: "30px" }}
                                    />
                                </td>
                                <td>{ele.plantname}</td>
                                <td>₹ {ele.price}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No items found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default OrderStatus;
