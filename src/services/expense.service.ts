import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient({log: ['query', 'info', 'warn', 'error']});

export const createExpense = async(data: {ownerId: string, description: string, amount: number, category: string, expenseDate: Date}) => {
    const {ownerId, description, amount, category, expenseDate} = data;
    const newExpense = prisma.expense.create({
        data: {
            description,
            amount,
            category,
            expenseDate,
            owner : {
                connect: {id: ownerId}
            }
        }
    })
    return newExpense;
}

export const updateExpense = async(id: string , ownerId: string, data: Partial<{description: string,amount: number, category: string, date: Date}>) => {
    const updatedTask = await prisma.expense.update({
        where: {id, ownerId},
        data: {
            ...data
        }
    })
    return updatedTask;
}

export const deleteExpense = async(id: string, ownerId: string) => {
    return prisma.expense.delete({
        where: {id, ownerId},
    });
}

export const getExpenses = async(data: {ownerId: string}) => {
    const {ownerId} = data;
    const getAllExpenses = await prisma.expense.findMany({
        where: {ownerId}
    })
    return {
        data: getAllExpenses.length ? getAllExpenses : [],
        message: getAllExpenses.length ? "" : "No Expenses Found",
    };
}

export const getExpense = async (id: string)=> {
    return prisma.expense.findUnique({
        where: {id}
    });
};