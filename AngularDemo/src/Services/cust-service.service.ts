import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/Models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustServiceService {

  cust: Customer;
  customers: Customer[];

  constructor(private http: HttpClient) { }

  req: string = "https://localhost:7217/api/Customers";
  getAllUsers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.req);
  }


  createUser(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.req, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'

      })
    });
  }
  getcustomerbyid(id: number): any {
    console.log("getcustbyid method invoked");
    return this.http.get<Customer>(this.req + "/" + id);

  }


  deleteUser(id: number): Observable<any> {

    return this.http.delete<any>(this.req + "/" + id, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })


    });
  }
  updateUser(id: number, customer: Customer): Observable<any> {

    return this.http.put<any>(this.req + "/" + id, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });

  }
}
