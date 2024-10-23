import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/Models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  req: string = "https://localhost:7280/api/Profiles";
  
  getUserProfile(): Observable<Profile> {
    return this.http.get<Profile>(this.req);
  }

  // Method to update the user profile
  updateUserProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.req, profile);
  }
}
