import {Pipe,PipeTransform} from '@angular/core';
import { Customer } from 'src/Models/customer';
@Pipe({
    name:'CustCity'
})
export class CustCity implements PipeTransform{
    transform(customers:Customer[],Ccity:string)
    {
      if(!customers || !Ccity)
      {
          return customers;
      }
      
      return customers.filter((x=>x.city==Ccity));
    }
  }
  @Pipe({
    name:'CustID'
  })
  export class CustID implements PipeTransform{
    transform(customers:Customer[],cid:number)
    {
        if(!customers || !cid)
        {
            return customers;
        }

      return customers.filter((x=>x.cid==cid));
      
      
    }
  }