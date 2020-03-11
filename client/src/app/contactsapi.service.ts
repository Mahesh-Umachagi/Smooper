import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsapiService {

  constructor(private http : HttpClient) { }

  getcontactslist(callback) {
    this.http.get('http://localhost:3000/api/contactslist').subscribe((result) => {
      callback (result);
    });
  }

  getcontactsdetails(id, callback) {
    this.http.get('http://localhost:3000/api/contactsdetails/'+id).subscribe((result) => {
      callback (result);
    });
  }

}
