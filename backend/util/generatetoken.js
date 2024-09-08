import jwt from "jsonwebtoken"
import secretKey from "../config/jwtconfig.js";

const generateToken = (user) => {
    return jwt.sign({ user }, secretKey, { expiresIn: '10h' });
};

export default generateToken;
