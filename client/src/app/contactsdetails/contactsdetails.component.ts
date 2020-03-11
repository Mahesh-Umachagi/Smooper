import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsapiService } from '../contactsapi.service';

@Component({
  selector: 'app-contactsdetails',
  templateUrl: './contactsdetails.component.html',
  styleUrls: ['./contactsdetails.component.css']
})
export class ContactsdetailsComponent implements OnInit {
  id; 
  details;
  FirstName;
  LastName;
  PhoneNumber;
  Address;
  City
  Zip;
  Email;

  constructor(private contactsdetails:ContactsapiService, private router:Router, private route:ActivatedRoute) {
    this.id = route.snapshot.paramMap.get('id');
    console.log(this.id);
    contactsdetails.getcontactsdetails (this.id, (result) => {
      this.details=result;
      this.FirstName = this.details.FirstName;
      this.LastName = this.details.LastName;
      this.PhoneNumber = this.details.PhoneNumber;
      this.Address = this.details.Address;
      this.City = this.details.City;
      this.Zip = this.details.Zip;
      this.Email = this.details.Email      
    });
   }

  ngOnInit() {
  }

}
