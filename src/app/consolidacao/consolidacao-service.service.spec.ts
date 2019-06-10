import { TestBed } from '@angular/core/testing';

import { ConsolidacaoServiceService } from './consolidacao-service.service';

describe('ConsolidacaoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsolidacaoServiceService = TestBed.get(ConsolidacaoServiceService);
    expect(service).toBeTruthy();
  });
});
