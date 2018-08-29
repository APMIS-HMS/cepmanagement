import { Injectable,ErrorHandler, Injector } from "@angular/core";
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from "./notification.service";
import { Response } from '../../models/error';

@Injectable()
export class ExceptionRefinerService implements ErrorHandler {

  error : Response;

  constructor(private injector : Injector){
  }

   handleSuccess(data){
    const notificatioService = this.injector.get(NotificationService);
    if(data){
      this.error = {
        code : data.code,
        data : {
          isSuccess : true,
          message : data.data.message
        }
      }
      return notificatioService.notify(this.error);
    }
   }
    handleError(error) {   
      //console.log(error);
      const notificatioService = this.injector.get(NotificationService);
        if (error) {
           // Server or connection error happened
           if (!navigator.onLine) {
            this.error = {
              code : 0,
              data : {
                isSuccess : false,
                message : 'You are currently not connected to the internet.'
              }
            }
             // Handle offline error
             return notificatioService.notify(this.error);
           } else {
               if(error.code === 401){
                 
                  this.error = {
                    code : 401,
                    data : {
                      isSuccess : false,
                      message : 'You are currently not logged in.'
                    }
                  }
                 // console.log($`logged error is =>`this.error);
                  return notificatioService.notify(this.error);
                    //throw('You are currently not logged in');
               }
               else if(error.status === 404){
                    //throw
               }
                    
             // Handle Http Error (error.status === 403, 404...)
           }
        } else {
          // Handle Client Error (Angular Error, ReferenceError...)     
        }
       // Log the error anyway
        this.error = {
          code : 7000,
          data : {
            isSuccess : false,
            message : error.message
          }
        }
        return notificatioService.notify(this.error);
       //console.error('It happens: ', error);
     };
}
