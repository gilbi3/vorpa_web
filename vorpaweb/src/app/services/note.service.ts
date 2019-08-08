import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap, retry } from 'rxjs/operators';
import { of } from 'rxjs';
import { Note } from '../notes/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http : HttpClient) { }

  getNotesList() : Observable<Note[]>{
    return this.http.get<Note[]>("https://vorpa.herokuapp.com/notes")
    .pipe(
      tap(data => console.log(data)), 
      catchError(this.handleError<Note[]>('getNotesList', []))
    );
  }

  createNote(note: Note) : Observable<Note> {
    return this.http.post<Note>("https://vorpa.herokuapp.com/notes", note);
  }

  deleteNote(noteId : Number) {
    var result = this.http.delete<Note>("https://vorpa.herokuapp.com/notes/" + noteId)
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
    return result;
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

}
