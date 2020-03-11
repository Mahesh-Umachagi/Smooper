import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContactsapiService } from '../contactsapi.service';

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {
  list;
  constructor(private contactlist : ContactsapiService, private router : Router, private route : ActivatedRoute) {
    contactlist.getcontactslist ((result) => {
      this.list=result;
    })
   }

  ngOnInit() {
  }

  onClick(){
    console.log(this.list.id);
    this.router.navigate(['/contactsdetails',this.list.id]);
  }

}
