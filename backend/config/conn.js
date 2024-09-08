import mongoose from "mongoose"
import { MONGODBURI } from "../util/utils.js"
export const connDB = async () => {
    try {
        await mongoose.connect(MONGODBURI)
        console.log("connect mongodb")
    } catch (error) {
        console.log("Error:",error)
    }
}