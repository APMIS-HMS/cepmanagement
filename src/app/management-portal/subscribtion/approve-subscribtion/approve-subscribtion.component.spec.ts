import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveSubscribtionComponent } from './approve-subscribtion.component';

describe('ApproveSubscribtionComponent', () => {
  let component: ApproveSubscribtionComponent;
  let fixture: ComponentFixture<ApproveSubscribtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApproveSubscribtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApproveSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
