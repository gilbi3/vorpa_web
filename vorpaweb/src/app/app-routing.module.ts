import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { CustomComponent } from './custom/custom.component';


const routes: Routes = [
  { path: 'notes', component: NotesComponent },
  { path: 'custom', component: CustomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
