import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT
const MONGODBURI=process.env.MONGODBURI
export {
    PORT,
    MONGODBURI,
}