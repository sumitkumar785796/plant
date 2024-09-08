import { body } from "express-validator"
//address
export const AddAddressValidation = [
    body('fname')
        .notEmpty()
        .withMessage('Name is required...'),
    body('mobile')
        .notEmpty().withMessage('Mobile is required...')
        .isMobilePhone()
        .withMessage('Invalid mobile phone number...')
        .isLength({ min: 10 }),
    body('pincode')
        .notEmpty()
        .withMessage('Pincode is required...'),
    body('locality')
        .notEmpty()
        .withMessage('Locality is required...'),
    body('address')
        .notEmpty()
        .withMessage('Address is required...'),
    body('city')
        .notEmpty()
        .withMessage('City is required...'),
    body('state')
        .notEmpty()
        .withMessage('State is required...'),
    body('userId')
        .notEmpty()
        .withMessage('UserId is required...'),
]