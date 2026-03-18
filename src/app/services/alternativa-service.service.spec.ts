import { TestBed } from '@angular/core/testing';

import { AlternativaServiceService } from './alternativa-service.service';

describe('AlternativaServiceService', () => {
  let service: AlternativaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlternativaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
