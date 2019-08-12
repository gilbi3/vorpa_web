import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user/user';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl, FormGroup } from '@angular/forms';
import * as jwt from 'jsonwebtoken';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit() {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  login(username: String, password: String) : any {
    
    var response;
    this.auth.login(username, password)
    .subscribe(
      res => response = res,
      error => console.log(error),
      () => {
        console.log(response.body);
      }
    );
  }

  generateAuthCookie(): void {
    console.log("Creating Auth Cookie");
  }

}
