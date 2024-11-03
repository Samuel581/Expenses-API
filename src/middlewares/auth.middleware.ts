import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    //Here we search the bearer token we request
    const token = req.header("Authorization")?.split(" ")[1];
    if(!token)  {
        res.status(498).json({message: "No token provided"});
        return;
    }
    try{
        const decoded = jwt.verify(token, `${process.env.JWT_SECRET}`) as {ownerId: string};
        req.body.ownerId = decoded.ownerId;
        next();
    }
    catch(error){
        res.status(498).json({error});
    }
}

export default verifyToken;