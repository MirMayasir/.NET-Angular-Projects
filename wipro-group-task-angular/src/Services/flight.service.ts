import { Injectable } from '@angular/core';
import { FlightDetails } from 'src/Models/flightdetails';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor() { }
  flights : FlightDetails = {flightFrom:"", flightTo:"", departure: new Date(), return:new Date(), traveller:1, flightclass:"" }
  fd: FlightDetails[] = [];
  populateFlight():any {
    this.fd = [{ flightFrom: "Mumbai", flightTo: "Hyd", departure: new Date("10/04/2022"), return: new Date("10/04/2022"), traveller: 1, flightclass: "econmy" },
      { flightFrom: "Mumbai", flightTo: "Hyd", departure: new Date("10/04/2022"), return: new Date("10/04/2022"), traveller: 1, flightclass: "econmy" }
    ]
    return this.fd;
  }
  AddFlight(flights : FlightDetails){
    // this.populateFlight();
    console.log("count :" + this.fd.length);
    this.fd.push(flights);
    console.log("count :" + this.fd.length);
    console.log("added")
  }

  getAll():any{
    console.log(this.fd.length);
    return this.fd;
  }
}
