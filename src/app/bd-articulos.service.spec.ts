import { TestBed } from '@angular/core/testing';

import { BdArticulosService } from './bd-articulos.service';

describe('BdArticulosService', () => {
  let service: BdArticulosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdArticulosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
