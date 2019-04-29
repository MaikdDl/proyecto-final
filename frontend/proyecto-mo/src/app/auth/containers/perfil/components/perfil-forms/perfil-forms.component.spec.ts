import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilFormsComponent } from './perfil-forms.component';

describe('PerfilFormsComponent', () => {
  let component: PerfilFormsComponent;
  let fixture: ComponentFixture<PerfilFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
