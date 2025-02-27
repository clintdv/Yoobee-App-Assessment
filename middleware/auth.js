//deals authentication
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
async function auth(req, res, next) {
    const token = req.header('Authorization');
    if (!token)
        return res.status(401).send('Access denied. No token provided.');
    try {

        const decoded = jwt.verify(token, process.env.REACT_APP_JWTKEY);
        req.user = decoded;  
        next();
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }
}

export default auth;
