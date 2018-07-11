import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingSubscribtionComponent } from './pending-subscribtion.component';

describe('PendingSubscribtionComponent', () => {
  let component: PendingSubscribtionComponent;
  let fixture: ComponentFixture<PendingSubscribtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingSubscribtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
