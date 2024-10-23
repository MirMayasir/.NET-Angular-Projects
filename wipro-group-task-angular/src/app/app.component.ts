import { Component } from '@angular/core';
import { LoginServiceService } from 'src/Services/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FlightApp';
  local:any;
  flag : false;

  constructor(public loginservice:LoginServiceService)
  {
  }

  ngOnInit(): void {
    this.local=localStorage;
  }

  logout():void{
    this.loginservice.logout();
  }
}