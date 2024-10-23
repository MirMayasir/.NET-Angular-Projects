import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/Models/login';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:LoginUser[];
  u:LoginUser={userName:"", password:""};
  constructor(private loginservice:LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    this.loginservice.createUser(this.u).subscribe(data=>{
      console.log("user added");
    })
  }
  signupSection(){
    this.router.navigate(['/login']);
  }
}
