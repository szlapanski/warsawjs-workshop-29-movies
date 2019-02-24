import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchResultsPageComponent } from './components/search-results-page/search-results-page.component';
import { SearchPageRoutingModule } from './search-page-routing.module';

@NgModule({
  declarations: [SearchPageComponent, SearchResultsPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule
  ]
})
export class SearchPageModule { }
