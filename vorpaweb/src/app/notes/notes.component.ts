import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from './Note';
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
      .subscribe(notes => this.notes = notes, error => console.log(error));
  }

  deleteNote(noteId: Number): void {
    console.log("clicked");
    console.log(noteId);
    this.noteService.deleteNote(noteId);
  }

}
