import { body } from "express-validator"
import Auth from "../models/auth.models.js"
export const authValidation = [
    body('fullname')
        .notEmpty()
        .withMessage('Name is required...'),
    body('email')
        .notEmpty()
        .withMessage('Email is required...')
        .custom(async value => {
            const existingUser = await Auth.findOne({ email: value })
            if (existingUser) {
                throw new Error('Email is already exists...')
            }
        }),,
    body('password')
        .notEmpty()
        .withMessage('Password is required')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters')
        .matches(/[a-z]/).withMessage('Password must contain at least one lowercase letter')
        .matches(/[A-Z]/).withMessage('Password must contain at least one uppercase letter')
        .matches(/[0-9]/).withMessage('Password must contain at least one digit')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Password must contain at least one special character')
        .not().isIn(['password', '123456', 'qwerty'])
        .withMessage('Common passwords are not allowed'),
]