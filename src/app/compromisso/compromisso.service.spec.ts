import { TestBed } from '@angular/core/testing';

import { CompromissoService } from './compromisso.service';

describe('CompromissoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompromissoService = TestBed.get(CompromissoService);
    expect(service).toBeTruthy();
  });
});
