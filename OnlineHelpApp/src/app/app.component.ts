import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineHelpApp';
  signedin$ : BehaviorSubject<boolean>;
  constructor(private authserver:AuthService){
    this.signedin$ = this.authserver.signedin$;
  }

  ngOnInit(){
  
    this.authserver.checkAuth().subscribe(()=>{});
    // setTimeout( ()=>{
    //   this.authserver.signout().subscribe(
    //     ()=>{});
    // }, 5000)
  }
}
