import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LoginUser } from 'src/Models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private req = "https://localhost:7217/api/Users";
  private token = '';

  constructor(private http: HttpClient, private router: Router) { }

  getAllUsers(): Observable<LoginUser[]> {
    return this.http.get<LoginUser[]>(this.req).pipe(
      catchError(this.handleError<LoginUser[]>('getAllUsers', []))
    );
  }

  createUser(user: LoginUser): Observable<LoginUser> {
    return this.http.post<LoginUser>(this.req, user).pipe(
      catchError(this.handleError<LoginUser>('createUser'))
    );
  }

  getUserById(username:string): any{
    return this.http.get<LoginUser>(this.req+"/"+username)
  }

  getUserToken(user: LoginUser): Observable<string> {
    return this.getAllUsers().pipe(
      map(users => users.filter(x => x.userName === user.userName && x.password === user.password)),
      map(filteredUsers => {
        if (filteredUsers.length > 0) {
          localStorage.setItem("Username", filteredUsers[0].userName);
          this.token = "validuser";
        } else {
          this.token = "";
        }
        this.saveToken();
        return this.token;
      }),
      catchError(() => {
        this.token = "";
        return of(this.token);
      })
    );
  }

  private saveToken() {
    localStorage.setItem("token", this.token);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("token") !== null;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  getToken(): string {
    return localStorage.getItem("token") || '';
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
