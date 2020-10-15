import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors{
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    //se erro for relacionado a validação  de dados
    if(error instanceof ValidationError){
       let errors: ValidationErrors = {};

       error.inner.forEach(err => {
           errors[err.path] = err.errors;
       });
       return response.status(400).json({message: 'Validation fails ', errors});
    }
    //para desenvolvedor ver
    console.error(error);
    //para o usuário ver
    return response.status(500).json({message: 'Internal server error'});
};

export default errorHandler;