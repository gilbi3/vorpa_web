import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Note } from './Note';
import { of } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.getNotesFromObservable();
      setTimeout(() => {
        console.log(this.notes);
      }, 5000);
  }

  getNotesObservable() : Observable<Note[]>{
    return this.http.get<Note[]>("http://localhost:8080/notes")
    .pipe(
      tap(data => console.log(data)), 
      catchError(this.handleError<Note[]>('getHeroes', []))
    );
  }

  getNotesFromObservable(): void {
    this.getNotesObservable()
    .subscribe(notes=>this.notes=notes, error=>console.log(error));
    
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private extractArray(observable : Observable<Note[]>) : Note[] {
    let array = [];
    observable.forEach(element => {
      array.push(element);
    });
    return array;
  }

        

}
