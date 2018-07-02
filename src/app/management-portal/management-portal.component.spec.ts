import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPortalComponent } from './management-portal.component';

describe('ManagementPortalComponent', () => {
  let component: ManagementPortalComponent;
  let fixture: ComponentFixture<ManagementPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
