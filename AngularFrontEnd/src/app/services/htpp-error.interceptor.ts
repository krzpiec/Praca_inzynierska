import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertifyService } from './alertify.service';
//import { AlertifyService } from './alertify.service';

@Injectable()
export class HtppErrorInterceptor implements HttpInterceptor {

  constructor(private alertify: AlertifyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse)=>{
        console.log(error.error.message)
         this.alertify.error(error.error);
          return throwError(error.error);
      })
    );
  }
}
