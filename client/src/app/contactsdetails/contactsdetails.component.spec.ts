import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsdetailsComponent } from './contactsdetails.component';

describe('ContactsdetailsComponent', () => {
  let component: ContactsdetailsComponent;
  let fixture: ComponentFixture<ContactsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
