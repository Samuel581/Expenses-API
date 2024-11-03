import { Prisma, PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { verifyPassword, hashPassword } from "../utils/hashing";

//TODO: Remove logs later, this is for dev purposes
const prisma = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });

export const createUser = async ( data : {name: string, email: string, password: string}) => {

    var {name, email, password} = data;
    const hashedPassword: string = await hashPassword(password);
    password = hashedPassword;

    const newUser = await prisma.owner.create({
        data: {
            name, 
            email,
            password
        }
    })

    return newUser;
}

export const authenticateUser = async (data: {email: string, password: string}) => {

    var {email, password} = data;

    const user = await prisma.owner.findUnique({where: {email}});

    //TODO: Code properly error handling
    if(!user) {
        return null;
    }
    const isMatch = await verifyPassword(password, user.password);
    if(!isMatch) {
        return null;
    }

    const token = jwt.sign({ownerId: user.id}, `${process.env.JWT_SECRET}`, {expiresIn: '1h'});
    return {token, user};
}