import { Component, OnInit } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Employees } from 'src/Models/emp';
import { Skill } from 'src/Models/skills';
import { EmpService } from 'src/Services/emp.service';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  e:Employees = {eid :0, ename :"", salary: 0, doj: new Date,
    deptid:{did:0, dname:"", dcity:""},
    skills:[{skillid:0, skillname:"", skilldesc:""}]
   }
  constructor(private employeeservice:EmpService){}
  depts:Department[];
  skills:Skill[];
  register(){
    console.log(this.e);
    console.log("register method called");
    this.employeeservice.AddEmp(this.e);
  }
  ngOnInit(): void {
    this.depts = this.employeeservice.depts
    this.skills = this.employeeservice.skills;
  }

}
