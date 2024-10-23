import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/Models/customer';
import { CustServiceService } from 'src/Services/cust-service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  customer : Customer[] = [];
  city:"";
  cid:0;
  constructor(private custmerservice:CustServiceService) { }

  ngOnInit(): void {
    this.getcustomers();
  }

  getcustomers():void{
    this.custmerservice.getAllUsers().subscribe(data=>{
      this.customer=data;
      console.log(this.customer);
    });

}
}
