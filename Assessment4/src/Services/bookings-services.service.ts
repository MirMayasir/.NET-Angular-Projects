import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { BookAppointment } from 'src/Models/bookappointment';
import { LoginUser } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class BookingsServicesService {

  private req = "https://localhost:7280/api/Appointments";

  constructor(private http:HttpClient) { }

  getAllBookings() :Observable<BookAppointment[]>{
    console.log("in api");
    return this.http.get<BookAppointment[]>(this.req);
  }

  AddBookings(customer: BookAppointment):Observable<BookAppointment>{
    console.log(customer);
    return this.http.post<BookAppointment>(this.req, customer, {
      headers : new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    })
  }
  getBookingById(bookingId:number): Observable<any>{
    return this.http.get<BookAppointment>(this.req+"/"+bookingId);
  }
}
