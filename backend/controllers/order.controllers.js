import saveAddress from "../models/address.models.js"
import auth from "../models/auth.models.js"
import order from "../models/order.models.js"
import { validationResult } from "express-validator";
import { AddOrderValidation } from "../helpers/ordervalidation.js"

export const AddOrder = async (req, res) => {
    try {
        // Run validation rules
        await Promise.all(
            AddOrderValidation.map((AddOrderValidation) => AddOrderValidation.run(req))
        );

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { addressId, paymentMethod, userId, itemDetails, totalPayment, transactionId } = req.body;

        // Validate transactionId based on paymentMethod
        if (paymentMethod === 'Online' && !transactionId) {
            return res.status(400).json({ message: 'Transaction ID is required for online payment' });
        }

        // Set transactionId based on paymentMethod
        const finalTransactionId = paymentMethod === 'Online' ? transactionId : null;

        try {
            const addre = await saveAddress.findById(addressId);
            const sign = await auth.findById(userId);

            if (!addre || !sign) {
                return res.status(404).json({ message: 'Address or User not found' });
            }

            const senddata = await order.create({
                addressId: addre,
                paymentMethod,
                userId: sign,
                itemDetails,
                totalPayment,
                transactionId: finalTransactionId
            });

            return res.status(201).json({ message: 'Your Order is confirmed...', data: senddata });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: 'Not created, something went wrong...', data: error.message });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal Server Error', data: error });
    }
}
export const ViewOrder = async (req, res) => {
    try {
        const view = await order.find()
            .populate('userId addressId')
            .sort({ _id: -1 })
        return res.status(200).json({ message: 'View Data', data: view })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', data: error.message })

    }
}
export const ViewSingleOrder = async (req, res) => {
    const { orderId } = req.params;
    try {
        const view = await order.findById(orderId)
        return res.status(200).json({ message: 'View Data', data: view })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', data: error })

    }
}
export const updateOrderStatus = async (req, res) => {
    const { orderId } = req.params;
    const { status } = req.body;

    // Basic validation
    if (!orderId || !status) {
        return res.status(400).json({ message: 'OrderId and status are required' });
    }


    try {
        // Update the order status
        const updatedOrder = await order.findByIdAndUpdate(orderId, { status }, { new: true });
        
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' });
        }

        return res.status(200).json({ message: 'Order status updated', data: updatedOrder });
    } catch (error) {
        console.error('Error updating order status:', error);
        return res.status(500).json({ message: 'Internal Server Error', data: error });
    }
};