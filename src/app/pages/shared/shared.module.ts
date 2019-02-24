import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaListComponent } from './components/media-list/media-list.component';
import { MediaListItemComponent } from './components/media-list-item/media-list-item.component';

@NgModule({
  declarations: [MediaListComponent, MediaListItemComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
