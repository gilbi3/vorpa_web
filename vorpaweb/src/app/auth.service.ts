import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: String, password: String): Observable<any> {
    var body = {
      username : username,
      password : password
    };
    return this.http.post("https://vorpa.herokuapp.com/user/login", body, {observe:'response', responseType:'text'});
  }
}
