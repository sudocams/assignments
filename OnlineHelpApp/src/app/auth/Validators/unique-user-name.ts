import {AsyncValidator, FormControl} from '@angular/forms';
import {map, catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core'
import { AuthService } from '../auth.service';
import { of } from 'rxjs';


@Injectable ({providedIn:'root'})
export class UniqueUserName  implements AsyncValidator{
    constructor( private authserve:AuthService){}

    validate = (control: FormControl) =>{
        const { value } = control;

        return this.authserve.usernameAvailable(value).pipe(
            map(value=>{
                if(value.available){
                    return null;
                }
                
            }),
            catchError(err=>{
                if(err.error.username){

                    return of({ nonUniqueName: true});

                }else{
                    return of({ noConnection :true });
                }
                
            })
        );
    };

}
