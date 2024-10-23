import { Component, OnInit } from '@angular/core';
import { Employees } from 'src/Models/emp';
import { EmpService } from 'src/Services/emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  flag = false;
  emps:Employees [] = [];

  constructor(private employeeservice:EmpService){}

  ngOnInit(){
    this.emps = this.employeeservice.getAllEmps();
    // this.emps = this.employeeservice.populateEmps();
  }
}
