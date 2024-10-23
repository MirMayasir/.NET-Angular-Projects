import { Component, OnInit } from '@angular/core';
import { ContactusService } from 'src/contactusService/contactus.service';
import { Contactus } from 'src/Models/contactus';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  
  constructor(private contactservices:ContactusService) { }
  cont : Contactus = {fullName:"", email:"", contact:0, message:""}
  

  addMsg(){
    this.contactservices.SendMessage(this.cont).subscribe(data =>{
      console.log("message sent");
      alert("Message sent successfully")
    })

  }
  ngOnInit(): void {

  }

}
