import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { AboutViewComponent } from './about-view/about-view.component';

const routes: Routes = [
  {path: '', component: MovieViewComponent},
  {path: 'about', component: AboutViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
