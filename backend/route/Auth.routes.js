import express from "express"
import {getProfile, signin, signup} from "../controllers/Auth.controllers.js"
import auth from "../middleware/Auth.middleware.js"
const authroutes = express.Router()
authroutes.route('/signup').post(signup)
authroutes.route('/signin').post(signin)
authroutes.route('/profile').get(auth,getProfile)
export default authroutes