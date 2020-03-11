import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactslistComponent } from './contactslist/contactslist.component';
import { ContactsdetailsComponent } from './contactsdetails/contactsdetails.component';
import { ContactsapiService } from './contactsapi.service';


@NgModule({
  declarations: [
    AppComponent,
    ContactslistComponent,
    ContactsdetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ ContactsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
