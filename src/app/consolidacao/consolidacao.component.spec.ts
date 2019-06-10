import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolidacaoComponent } from './consolidacao.component';

describe('ConsolidacaoComponent', () => {
  let component: ConsolidacaoComponent;
  let fixture: ComponentFixture<ConsolidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsolidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
