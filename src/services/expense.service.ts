import {Prisma, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export const createExpense = async(data: {ownerId: string, description: string, amount: number, category: string}) => {
    const {ownerId, description, amount, category} = data;
    const newExpense = prisma.expense.create({
        data: {
            description,
            amount,
            category,
            owner : {
                connect: {id: ownerId}
            }
        }
    })
    return newExpense;
}

export const updateExpense = async(id: string , ownerId: string, data: Partial<{description: string,amount: number, category: string}>) => {
    const updatedTask = await prisma.expense.update({
        where: {id, ownerId},
        data: {
            ...data
        }
    })
    return updatedTask;
}

export const deleteExpense = async(id: string, ownerId: string) => {
    const deletedExpense = await prisma.expense.delete({
        where: {id, ownerId},
    })
    return deletedExpense;
}

export const getExpenses = async(data: {ownerId: string}) => {
    const {ownerId} = data;
    console.log(ownerId);
    const getAllExpenses = await prisma.expense.findMany({
        where: {ownerId}
    })
    return getAllExpenses;
}