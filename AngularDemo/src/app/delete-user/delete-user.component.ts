import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/customer';
import { CustServiceService } from 'src/Services/cust-service.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  customer : Customer = {cid:0, cname:"", city:""};
  cust : Customer[]= [];
  custId : number;

  constructor(private custservice:CustServiceService) { }

  deleteCustomer(){
    console.log("start");
    this.custservice.deleteUser(this.custId).subscribe(data=>{
      console.log("user deleted");
    })
  }
  ngOnInit(): void {
  }

}
