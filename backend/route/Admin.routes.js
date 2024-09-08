import express from "express"
import { reactAdminPage } from "../controllers/react.controller.js"
const apiadmin = express.Router()
apiadmin.route('/admin').get(reactAdminPage)
export default apiadmin