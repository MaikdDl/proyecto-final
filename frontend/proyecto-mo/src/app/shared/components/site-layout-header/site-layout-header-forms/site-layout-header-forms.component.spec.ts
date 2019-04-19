import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutHeaderFormsComponent } from './site-layout-header-forms.component';

describe('SiteLayoutHeaderFormsComponent', () => {
  let component: SiteLayoutHeaderFormsComponent;
  let fixture: ComponentFixture<SiteLayoutHeaderFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLayoutHeaderFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutHeaderFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
