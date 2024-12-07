import {IsNumber, IsNotEmpty, isDate, isEnum, IsString, Min, IsEnum, IsOptional} from "class-validator";

export enum ExpenseCategory {
    BILLS = "Bills",
    FOOD = "Food",
    LEISURE = "Leisure",
    ELECTRONICS = "Electronics",
    UTILITIES = "Utilities",
    CLOTHING = "Clothing",
    HEALTH = "Health",
    OTHERS = "Others",
    TRANSPORT = "Transport",
    EDUCATION = "Education",
    GIFTS = "Gifts",
    SAVINGS = "Savings",
}

export class CreateExpenseDTO {
    @IsString()
    @IsNotEmpty()
    description!: string;

    @IsNumber()
    @Min(0.01)
    amount!: number;

    @IsEnum(ExpenseCategory, { message: "Category not currently allowed" })
    category!: ExpenseCategory;
}

export class UpdateExpenseDTO {
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description!: string;

    @IsNumber()
    @Min(0.01)
    @IsOptional()
    amount!: number;

    @IsOptional()
    @IsEnum(ExpenseCategory, { message: "Category not currently allowed" })
    category!: ExpenseCategory;
}