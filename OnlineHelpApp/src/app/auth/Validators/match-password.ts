import {Validator, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';


@Injectable({providedIn:'root'})
export class MatchPassword  implements Validator{
    validate(formGroup: FormGroup){
        const { password, passwordConfirm} = formGroup.value;
        if (password === passwordConfirm){
            // return null if true
            return null;
        }else{
            // if false then it will retuen this validation error
            return { passwordsDontMatch: true};
        }
        
    }
}
