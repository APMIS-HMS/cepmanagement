import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from '../../../node_modules/rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private locker: LocalStorageService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return Observable.fromPromise(this.handleAccess(request, next));
      }

      private async handleAccess(request: HttpRequest<any>, next: HttpHandler):
      Promise<HttpEvent<any>> {
    const token = await this.locker.get('apmisToken');
    console.log(token);
    let changedRequest = request;
    // HttpHeader object immutable - copy values
    const headerSettings: {[name: string]: string | string[]; } = {};

    for (const key of request.headers.keys()) {
      headerSettings[key] = request.headers.getAll(key);
    }
    if (token) {
      headerSettings['Authorization'] = 'Bearer ' + token;
    }
    headerSettings['Content-Type'] = 'application/json';
    const newHeader = new HttpHeaders(headerSettings);

    changedRequest = request.clone({
      headers: newHeader});
      console.log(changedRequest);
    return next.handle(changedRequest).toPromise();
  }

    // intercept(req, next) {

    //     // const token = localStorage.getItem('apmisToken');
    //     const token = this.locker.get('apmisToken')
    //     console.log('apmis token=>',token);
    //     const authRequest = req.clone({
    //         headers: req.headers.set('Authorization', `Bearer ${token}`)
    //     });
    //     console.log(token);
    //     return next.handle(authRequest);
    // }
}

@Injectable()
export class PortalAuthInterceptor implements HttpInterceptor {
    token;
    constructor(private locker: LocalStorageService) {
        this.token =  this.locker.get('portalToken');
    }
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
  
      return next.handle(req).do(evt => {
        if (evt instanceof HttpResponse) {
          console.log('---> status:', evt.status);
          console.log('---> filter:', req.params.get('filter'));
        }
      });
  
    }
}
