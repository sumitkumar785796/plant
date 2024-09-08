import { body } from "express-validator"
//Blog
export const blogValidation = [
    body('blogname')
        .notEmpty()
        .withMessage('Blog is required...'),
    body('description')
        .notEmpty()
        .withMessage('Description is required...'),
]