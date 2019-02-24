import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListPageComponent } from './pages/movie-page/components/@init/movie-list-page.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'movies'
},{
  path: 'movies',
  loadChildren: "./pages/movie-page/movie-page.module#MovieListPageModule"
},{
  path: 'contact',
  loadChildren: "./pages/contact-page/contact-page.module#ContactPageModule"
},{
  path: 'search',
  loadChildren: "./pages/search-page/search-page.module#SearchPageModule"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
