import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title  = "App Component"

    local:any;
  constructor(public loginservice:LoginService)
  {
  }

  ngOnInit(): void {
    this.local=localStorage;
  }

  logout():void{
    this.loginservice.logout();
  }
} 

