import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivatedSubscribtionComponent } from './deactivated-subscribtion.component';

describe('DeactivatedSubscribtionComponent', () => {
  let component: DeactivatedSubscribtionComponent;
  let fixture: ComponentFixture<DeactivatedSubscribtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivatedSubscribtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivatedSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
