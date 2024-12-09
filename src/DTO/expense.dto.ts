import {IsNumber, IsNotEmpty, isDate, isEnum, IsString, Min, IsEnum, IsOptional} from "class-validator";

export enum ExpenseCategory {
    BILLS = "bills",
    FOOD = "food",
    LEISURE = "leisure",
    ELECTRONICS = "electronics",
    UTILITIES = "utilities",
    CLOTHING = "clothing",
    HEALTH = "health",
    OTHERS = "others",
    TRANSPORT = "transport",
    EDUCATION = "education",
    GIFTS = "gifts",
    SAVINGS = "savings",
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