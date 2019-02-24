import { NgModule } from '@angular/core';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { CommonModule } from '@angular/common';
import { ContactPageRoutingModule } from './contact-page-routing.module';

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    ContactPageRoutingModule
  ]
})
export class ContactPageModule { }
