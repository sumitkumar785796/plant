import adminAuth from "../models/admin.auth.models.js"
import generateToken from "../util/generatetoken.js"
export const signup = async (req, res) => {

    const { adminfullname, adminemail, password } = req.body
    try {
        const register = await adminAuth.create({
            adminfullname,
            adminemail,
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
    const { adminemail, password } = req.body
    try {
        const user = await adminAuth.findOne({ adminemail });

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