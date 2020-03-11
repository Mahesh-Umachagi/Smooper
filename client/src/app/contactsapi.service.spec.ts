import { TestBed } from '@angular/core/testing';

import { ContactsapiService } from './contactsapi.service';

describe('ContactsapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactsapiService = TestBed.get(ContactsapiService);
    expect(service).toBeTruthy();
  });
});
