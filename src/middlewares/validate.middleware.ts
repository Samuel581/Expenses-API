import {plainToInstance} from "class-transformer";
import {validate, ValidationError} from "class-validator";
import {Request, Response, NextFunction} from "express";

export function validationMiddleware<T extends object>(dtoClass: new () => T) {
    return async  (req: Request, res: Response, next: NextFunction) => {
        const dtoInstance: T = plainToInstance(dtoClass, req.body)
        const errors: ValidationError[] = await validate(dtoInstance);

        if(errors.length > 0){
            res.status(400).json({
                message: "Validation failed.",
                errors: errors.map((err) => ({
                    property: err.property,
                    constraints: err.constraints,
                }))
            })
            return;
        };
        next();
    };
}