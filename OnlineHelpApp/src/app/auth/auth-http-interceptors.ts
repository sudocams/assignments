import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpEventType, HttpResponse} from '@angular/common/http';
import { tap, filter } from 'rxjs/operators';

@Injectable()
export class AuthHttpInterceptors implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>>{

        const modifiedReq = req.clone({
            withCredentials:false
        });

        return next.handle(modifiedReq)
        // .pipe(
        //     filter (val=> val.type ===HttpEventType.Sent),
        //     tap(val=>{
                
        //         console.log('event was sent to the server');
                
        //     })
        // )
    }
}
