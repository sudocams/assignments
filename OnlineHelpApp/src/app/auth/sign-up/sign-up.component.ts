import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { MatchPassword } from '../Validators/match-password';
import { AuthService } from '../auth.service';
import { UniqueUserName } from '../Validators/unique-user-name';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(5),
       Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)],
       [this.uniqueNm.validate]),

    email: new FormControl('', [Validators.required, 
    Validators.minLength(8), Validators.maxLength(20)]),

    password: new FormControl('', [Validators.required, 
      Validators.minLength(8), Validators.maxLength(20)]),

    passwordConfirm: new FormControl('',[Validators.required,
       Validators.minLength(8), Validators.maxLength(20)])
  }, {validators: [this.matchpass.validate]});
  
  constructor(private matchpass: MatchPassword, private uniqueNm:UniqueUserName, private authserver:AuthService) { }

  ngOnInit() {

  }

  onSubmit(){
    if(this.authForm.invalid){
      return;
    }
    this.authserver.signUp(this.authForm.value).subscribe({
      next:response=>{

      },
      error:err=>{
        if (!err.status){
          this.authForm.setErrors({ noConnection:true })
        }else{
          this.authForm.setErrors({  nonUniqueName:true })
        }
      }
    });
  }

}
