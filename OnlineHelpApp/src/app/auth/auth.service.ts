import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import { tap } from 'rxjs/operators';


interface usernameResponse{
  available: boolean;
}

interface signupcredentials{
  username: string;
  email: string;
  
}

interface SigninCredentials{
  username:string;
  email: string;
  password:string;
   
}
interface SigninResponse{
  username:string;
  email:string;
  
   
}

interface signedinResponse{
  authenticated:boolean;
  username:string;
}
interface signupresponse{
  username: string;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedin$ = new BehaviorSubject(false);

  httpHeaders = new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Token 9e16a8fba7d0fe6e70a0b417d70660c3eb487be0'
  });
  baseurl = "http://localhost:8000/";

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){
    return this.http.post<usernameResponse>(this.baseurl +'users/' , {headers:this.httpHeaders, username:username})
  }


  signUp(credentials:signupcredentials){
    
    return this.http.post<signupresponse>(this.baseurl  +'users/', credentials,
     {headers:this.httpHeaders,}).pipe(
       tap( (response)=>{
         this.signedin$.next(true);
         //this.username = response.username;
         //this.username = response.username;
       })
     );
  }

  signin(newCredentials:SigninCredentials){
    return this.http.post<SigninResponse>('http://localhost:8000/auth/',newCredentials, { headers: this.httpHeaders}).pipe(
      //tap statement is not executed if there is an error
      tap( (response)=>{
        this.signedin$.next(true);
        //this.username = response.username;

      })
    )
  }

  checkAuth(){
    return this.http.get<signedinResponse>(this.baseurl + 'users/',
     {headers: this.httpHeaders}).pipe(
      tap(({authenticated})=>{
        this.signedin$.next(authenticated)
      })
    );
  }
  signout(){
    return this.http.post(this.baseurl + 'users/', {}).pipe(
      tap( ()=>{this.signedin$.next(false)})
    )
  }
}
