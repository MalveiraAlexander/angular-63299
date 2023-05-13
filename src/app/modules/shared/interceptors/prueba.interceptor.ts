import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class PruebaInterceptor implements HttpInterceptor {

  constructor() {}

  handleError(error: HttpErrorResponse, request: HttpRequest<unknown>, next: HttpHandler) {
    console.log('Error', error);
    if (error.status === 0) {
      alert('No se encontró el recurso');
    } else if (error.status === 500) {
      return next.handle(request);
    }
    return throwError(error);
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Interceptor', request);
    if (request.url.includes('hola')) {
      return next.handle(request);
    }
    return next.handle(request).pipe(catchError((error) => this.handleError(error, request, next)));
  }
}
