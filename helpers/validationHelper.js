import { validationResult } from "express-validator";

export const handleValidationResults = (request, response, next) => {
    const errors = validationResult(request);
    if (errors.isEmpty()) {
        next();
    }   else{

    return response.status(422).json({ errors: errors.array() });
    }
};