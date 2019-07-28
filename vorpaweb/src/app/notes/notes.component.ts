import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.notes$ = this.http
            .get<Note[]>("https://vorpa.herokuapp.com/notes");
    console.log(this.notes$);
  }

}
