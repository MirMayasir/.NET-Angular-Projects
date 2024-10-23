import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/customer';
import { CustServiceService } from 'src/Services/cust-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private custservice:CustServiceService) { }
  customer : Customer = {cid:0, cname:"", city:""};
  cust : Customer[]= [];
  custId : number;

  addCust(){
    this.custservice.createUser(this.customer).subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
    
  }

}
