import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private url = 'http://localhost:3000/'

  constructor(private http:HttpClient) { }

  signupSubmit(data:FormData):Observable<FormData> {    
    return this.http.post<FormData>(this.url + 'signup', data)
  }

  loginSubmit(loginData:FormData): Observable<FormData> {
    return this.http.post<FormData>(this.url + 'userLogin', loginData)
  }

}
