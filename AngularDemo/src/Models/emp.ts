import { Department } from "./Department";
import { Skill } from "./skills";

export interface Employees{
    eid : number;
    ename : string;
    salary : number;
    doj : Date;
    deptid : Department;
    skills : Skill[];
}