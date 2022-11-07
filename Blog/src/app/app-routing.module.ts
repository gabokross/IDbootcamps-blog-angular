import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostboardComponent } from './components/postboard/postboard.component';
import { PostformComponent } from './components/postform/postform.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PostboardComponent },
  { path: 'posts', component: PostboardComponent },
  { path: 'new', component: PostformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
