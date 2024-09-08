import express from "express"
import {getProfile, signin, signup} from "../controllers/Admin.auth.controllers.js"
import auth from "../middleware/Auth.middleware.js"
const adminroutes = express.Router()
adminroutes.route('/signup').post(signup)
adminroutes.route('/signin').post(signin)
adminroutes.route('/profile').get(auth,getProfile)
export default adminroutes