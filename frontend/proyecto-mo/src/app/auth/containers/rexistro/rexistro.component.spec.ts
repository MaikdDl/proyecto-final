import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RexistroComponent } from './rexistro.component';

describe('RexistroComponent', () => {
  let component: RexistroComponent;
  let fixture: ComponentFixture<RexistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RexistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RexistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
