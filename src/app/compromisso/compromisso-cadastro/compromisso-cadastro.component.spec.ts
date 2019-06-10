import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompromissoCadastroComponent } from './compromisso-cadastro.component';

describe('CompromissoCadastroComponent', () => {
  let component: CompromissoCadastroComponent;
  let fixture: ComponentFixture<CompromissoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompromissoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompromissoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
