import { body } from "express-validator"
//categories
export const AddOrderValidation = [
    body('addressId')
        .notEmpty()
        .withMessage('Select addressId ...'),
    body('paymentMethod')
        .notEmpty()
        .withMessage('Select Payment Method ...'),
    body('userId')
        .notEmpty()
        .withMessage('UserId Required...'),
    body('itemDetails')
        .notEmpty()
        .withMessage('Item Details Required...'),
    body('totalPayment')
        .notEmpty()
        .withMessage('total payment required...'),
]