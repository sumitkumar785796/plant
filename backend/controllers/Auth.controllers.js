import Auth from "../models/auth.models.js"
import generateToken from "../util/generatetoken.js"
import { validationResult } from "express-validator";
import { authValidation } from "../helpers/authValidation.js";
export const signup = async (req, res) => {
    // Run validation rules
    await Promise.all(
        authValidation.map((authValidation) => authValidation.run(req))
    );
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { fullname, email, password } = req.body

    try {
        const register = await Auth.create({
            fullname,
            email,
            password
        })
        return res
            .status(201)
            .json({
                message: "Signup is successfully...",
                data: register
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error",
                data: error.message
            })
    }
}
export const signin = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Auth.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            return res
                .status(200)
                .json({
                    message: "login successfully...",
                    data: user,
                    token: generateToken(user),
                    tokenType: "Bearer"
                });
        } else {
            return res
                .status(401)
                .json({
                    message: "Your authentication information is incorrect. Please try again."
                })
        }
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error"
            })
    }
}
export const getProfile = async (req, res) => {
    try {
        return res
            .status(200)
            .json({
                message: "View Your Profile",
                data: req.user.user
            })
    } catch (error) {
        return res
            .status(500)
            .json({
                message: "Internal Server Error"
            })
    }
}