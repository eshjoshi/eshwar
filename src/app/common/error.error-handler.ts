import { ErrorHandler } from "@angular/core";
import { AppError } from "./error-apperror";
import { NotFoundError } from "./error.notfound";
//Global error handling
export class AppErrorHandler implements ErrorHandler{

    handleError(error){

        alert('something went wrong')    
        console.log(error);
    }
}