import { body } from "express-validator"
//categories
export const categoriesValidation = [
    body('categoryname')
        .notEmpty()
        .withMessage('Category Name is required...'),

]
export const plantValidation = [
    body('category')
        .notEmpty()
        .withMessage('Category is required...'),
    body('plantname')
        .notEmpty()
        .withMessage('Plant Name is required...'),
    body('price')
        .notEmpty()
        .withMessage('Price is required...'),
    body('qty')
        .notEmpty()
        .withMessage('Quantity is required...'),
]