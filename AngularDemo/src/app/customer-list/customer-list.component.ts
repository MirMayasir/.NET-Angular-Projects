import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/customer';
import { CustServiceService } from 'src/Services/cust-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[]=[];
  flag=true;
    constructor(private custservice: CustServiceService){}
    //page load event
    ngOnInit()
    {
     this.getcustomers(); 
    }
    getcustomers():void{
    this.custservice.getAllUsers().subscribe(data=>{
      this.customers=data;
      console.log(this.customers);
    });
  }

}
