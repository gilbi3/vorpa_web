import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './addnote/addnote.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'user', component: UserComponent },
  { path: 'user/login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
