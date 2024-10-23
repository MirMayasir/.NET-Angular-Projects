import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Department } from 'src/Models/Department';
import { Employees } from 'src/Models/emp';
import { Skill } from 'src/Models/skills';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor() { }
  skill:Skill[] = [{skillid:0, skillname:"", skilldesc:""}]
  skills:Skill[] = [{skillid:1, skillname:"java", skilldesc:"intermediate"},
    {skillid:2, skillname:".net", skilldesc:"intermediate"}
  ]
  Dept : Department = {did: 0, dname: "", dcity: ""};

  depts:Department[] = [{did:1, dname:"admin", dcity:"bangulore"},
    {did:2, dname:"IT", dcity:"bangulore"}
  ]
  emp:Employees = {eid :0, ename :"", salary: 0, doj: new Date(),
    deptid:{did:0, dname:"", dcity:""},
    skills:[{skillid:0, skillname:"", skilldesc:""}]
   }
  emps: Employees[] = [];

  populateEmps():any{
    this.emps= [{"eid" : 100, "ename": "mayasir", "salary": 27533, "doj" : new Date("10/4/2024"),
      deptid:{did:100, dname:"admin", dcity:"banglore"},
      skills:[{skillid:20, skillname:".net", skilldesc:"begginer"}]
     },
      {"eid" : 100, "ename": "mayasir","salary": 27533, "doj" : new Date("10/4/2024"),
        deptid:{did:200, dname:"business", dcity:"banglore"},
      skills:[{skillid:20, skillname:".net", skilldesc:"begginer"}]
      }]
      return this.emps;
  }

  AddEmp(emp:Employees){
    this.populateEmps();
    console.log("count +" + this.emps.length);
    this.emps.push(emp);
    console.log("count: " +this.emps.length);
    console.log("record added successfully")
  }

  getAllEmps():any{
    return this.emps;
  }
}
