import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { PostboardComponent } from './components/postboard/postboard.component';
import { PostformComponent } from './components/postform/postform.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: IndexComponent },
  { path: 'posts', component: PostboardComponent },
  { path: 'new', component: PostformComponent }
  //crear error 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
