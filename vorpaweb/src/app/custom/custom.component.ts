import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  test: any;
  template: Object;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.test = new Subject();
    var obs = this.getNotesObservable();
    Observable.create(function (observer) {});
    console.log(obs);
    var monkey = this.getNotesObservable()
      .subscribe(data => this.test = data, 
      err => console.log(err), 
      () => {
        console.log(this.test);
        this.extractTemplate();
        console.log(Object.getOwnPropertyNames(this.template));
      });

  }

  getNotesObservable() : Observable<any> {
    return this.http.get("https://vorpa.herokuapp.com/notes")
    .pipe(map(this.extractData))
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private extractTemplate(){
    this.template = this.test[0];
  }

}
