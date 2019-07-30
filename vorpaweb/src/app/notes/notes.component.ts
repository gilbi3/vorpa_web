import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { Note } from './Note';
import { of } from 'rxjs';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(private http: HttpClient, private noteService: NoteService) { }

  ngOnInit() {
      this.getNotes();
      setTimeout(() => {
        console.log(this.notes);
      }, 5000);
  }

  getNotes(): void {
    this.noteService.getNotesList()
      .subscribe(notes=>this.notes=notes, error=>console.log(error));
  }
}
