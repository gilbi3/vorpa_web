import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../notes/note.service';
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
    this.noteService.createNote(note)
    .subscribe((data) =>
      {
        console.log(data);
        alert("Note saved to database.");
        this.noteForm.reset();
      }
    );
  }

}
