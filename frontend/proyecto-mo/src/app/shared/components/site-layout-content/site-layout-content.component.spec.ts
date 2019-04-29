import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLayoutContentComponent } from './site-layout-content.component';

describe('SiteLayoutContentComponent', () => {
  let component: SiteLayoutContentComponent;
  let fixture: ComponentFixture<SiteLayoutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLayoutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLayoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
