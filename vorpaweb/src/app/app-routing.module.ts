import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './addnote/addnote.component';


const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path : 'notes/add', component: AddNoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
