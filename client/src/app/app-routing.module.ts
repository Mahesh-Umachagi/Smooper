import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { ContactsdetailsComponent } from './contactsdetails/contactsdetails.component';

const routes: Routes = [
  {path : '', component : ContactslistComponent},
  {path : 'contactsdetails', component : ContactsdetailsComponent},
  {path : 'contactsdetails/:id', component : ContactsdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
