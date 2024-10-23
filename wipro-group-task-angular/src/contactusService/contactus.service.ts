import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from 'src/Models/contactus';


@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  constructor(private http: HttpClient) { }
  // cont: Contactus;
  // Contacts: Contactus[];

  req: string = "https://localhost:7028/api/ContactRepo";

  getAllMessages(): Observable<Contactus[]> {
    return this.http.get<Contactus[]>(this.req);
  }

  SendMessage(contact: Contactus): Observable<Contactus>{
    return this.http.post<Contactus>(this.req, contact,{
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Method': '*'
      })
    });
  }
}
