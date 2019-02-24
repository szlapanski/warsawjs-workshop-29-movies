import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieListPageComponent } from './components/@init/movie-list-page.component';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [{
  path: '',
  component: MovieListPageComponent
},{
  path: ':id',
  component: ItemComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieListPageRoutingModule { }
