import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from 'src/Models/customer';
import { CustServiceService } from 'src/Services/cust-service.service';

@Component({
  selector: 'app-updatecustomer',
  templateUrl: './updatecustomer.component.html',
  styleUrls: ['./updatecustomer.component.css']
})
export class UpdatecustomerComponent implements OnInit {
  c:Customer;
  customer : Customer[] = [];
  custid:number;
  constructor(private custservice:CustServiceService, private route:ActivatedRoute) {
    this.custid = Number(this.route.snapshot.paramMap.get('id'));
   }

  ngOnInit(): void {
    console.log(this.custid);
    this.custservice.getcustomerbyid(this.custid).subscribe(data =>{
      this.c=data;
    })
  }
  Save(){
    this.custservice.updateUser(this.custid, this.c).subscribe(data =>{
      console.log("data modified");
    })
  }

}
