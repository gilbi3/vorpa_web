import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { Note } from '../notes/Note';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddNoteComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit() {
  }

  noteForm = new FormGroup({
    text: new FormControl('')
  });

  public createNote(note : Note) : void {
    this.noteService.createNote(note);
  }

}
