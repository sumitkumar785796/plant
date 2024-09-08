import saveAddress from "../models/address.models.js"
import auth from "../models/auth.models.js"
import { validationResult } from "express-validator";
import { AddAddressValidation } from '../helpers/AddAddressvalidator.js'

export const AddAddress = async (req, res) => {
    try {
        // Run validation rules
        await Promise.all(
            AddAddressValidation.map((AddAddressValidation) => AddAddressValidation.run(req))
        );
        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { fname, mobile, pincode, locality, address, city, state, userId } = req.body;
        const user = await auth.findById(userId);
        const senddata = await saveAddress.create({
            fname, mobile, pincode, locality, address, city, state, userId: user
        })
        console.log(senddata)
        return res.status(201).json({ message: 'Add Address successfully', data: senddata })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: 'Internal Server Error', data: error.message })
    }
}
export const ViewAdress = async (req, res) => {
    try {
        const view = await saveAddress.find()
        return res.status(200).json({ message: 'View Data', data: view })
    } catch (error) {
        return res.status(500).json({ message: 'Internal Server Error', data: error })

    }
}