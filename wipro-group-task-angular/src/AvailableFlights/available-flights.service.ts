import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FlightsAvailable} from 'src/Models/availableFlights'

@Injectable({
  providedIn: 'root'
})
export class AvailableFlightsService {

  constructor(private http:HttpClient) { }
  req : string = "https://localhost:7028/api/CurrentFlights";

  getAllAvailableFlights() :Observable<FlightsAvailable[]>{
    console.log(this.req)
    return this.http.get<FlightsAvailable[]>(this.req);
  }

  getCustomerById(id : number) : any{
    console.log("id fetched")
    console.log(id);
    return this.http.get<FlightsAvailable>(this.req+"/"+id);   
  }

  
}
