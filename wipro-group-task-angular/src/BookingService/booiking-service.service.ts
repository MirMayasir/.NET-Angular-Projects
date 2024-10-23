import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from 'src/Models/bookings';

@Injectable({
  providedIn: 'root'
})
export class BooikingServiceService {

  constructor(private http:HttpClient) { }

  req:string= "https://localhost:7028/api/FlightBookings";

  getAllBookings() :Observable<Bookings[]>{
    return this.http.get<Bookings[]>(this.req);
  }

  AddBookings(customer: Bookings):Observable<Bookings>{
    console.log(customer);
    return this.http.post<Bookings>(this.req, customer, {
      headers : new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    })
  }

  getFlightById(bookingId:number): Observable<any>{
    return this.http.get<Bookings>(this.req+"/"+bookingId);
  }
}
