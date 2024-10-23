
import {Pipe,PipeTransform} from '@angular/core';
import { FlightsAvailable } from 'src/Models/availableFlights';
@Pipe({
    name:'Fcity'
})
export class Fcity implements PipeTransform{
    transform(customer:FlightsAvailable[],Fcity:string)
    {
      console.log(customer.length);
      if(!customer || !Fcity)
      {
          return customer;
      }
      return customer.filter((x=>x.flightFrom==Fcity));
    }
  }
  @Pipe({
    name:'Dcity'
  })
  export class Dcity implements PipeTransform{
    transform(customer:FlightsAvailable[],Dcity:string)
    {
        if(!customer || !Dcity)
        {
            return customer;
        }
        console.log("inside filter");
      return customer.filter((x=>x.flightTo==Dcity));   
    }
  }