import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/Models/login';
import { LoginService } from 'src/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:LoginUser;
  errormsg:string;
  u:LoginUser={userName:"", password:""};
  constructor(private route:Router, private loginservice:LoginService) { 
    this.user = { userName: "", password: "" };
  }
  userform:FormGroup=new FormGroup({});

  ngOnInit(): void {
    this.userform=new FormGroup(
      {
        username:new FormControl(this.user.userName,[
          Validators.required, Validators.minLength(5)
        ]),
        password:new FormControl(this.user.password,[
          Validators.required,Validators.maxLength(10)
        ]),
      }
    );
  }
  login(): void {
    let currentuser: LoginUser = {
      userName: this.userform.value.username,  // Change 'username' to 'userName'
      password: this.userform.value.password
    };
    
    this.loginservice.getUserToken(currentuser).subscribe(
      (token: string) => {
        if (token) {
          localStorage.setItem("token", token);
          this.route.navigateByUrl('/Customers');
        } else {
          this.errormsg = "Credentials Incorrect";
        }
      },
      (error) => {
        this.errormsg = "Login failed";
        console.error("Error fetching token:", error);
      }
    );
  }

}
