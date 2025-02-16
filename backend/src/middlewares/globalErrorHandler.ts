import { HttpError } from 'http-errors';
import { Request, Response, NextFunction } from "express";
import envConfig from '../config/config';

const globalErrorHandler = (err: HttpError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({
        message: err.message,
        errorStack: envConfig.environment === 'development' ? err.stack : "Something went wrong" // Corrected from error.stack to err.stack
    });
};

export default globalErrorHandler;