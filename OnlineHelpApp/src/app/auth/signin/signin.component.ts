import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  authForm = new FormGroup({
    username: new FormControl('',[Validators.required, Validators.minLength(5),
       Validators.maxLength(20), Validators.pattern(/^[a-z0-9]+$/)]),

    email: new FormControl('', [Validators.required, 
    Validators.minLength(8), Validators.maxLength(20)]),

    password: new FormControl('', [Validators.required, 
      Validators.minLength(8), Validators.maxLength(20)])
      });

  constructor( private authservice:AuthService, private route:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    if (this.authForm.invalid){
      return
    }

    this.authservice.signin(this.authForm.value).subscribe(
      { next: ()=>{
        this.route.navigateByUrl('/');
      },
      error: ({error})=>{
        if(error.username | error.email |error.password){
          this.authForm.setErrors({ credentials: true});
        }
      }
    })

  }

}
