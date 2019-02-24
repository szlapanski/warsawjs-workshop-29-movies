import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListPageRoutingModule } from './movie-page-routing.module';
import { MovieListPageComponent } from './components/@init/movie-list-page.component';
import { ItemComponent } from './components/item/item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    MovieListPageComponent,
    ItemComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    MovieListPageRoutingModule
  ]
})
export class MovieListPageModule { }
