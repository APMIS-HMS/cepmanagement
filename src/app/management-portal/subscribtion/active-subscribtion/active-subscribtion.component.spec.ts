import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveSubscribtionComponent } from './active-subscribtion.component';

describe('ActiveSubscribtionComponent', () => {
  let component: ActiveSubscribtionComponent;
  let fixture: ComponentFixture<ActiveSubscribtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveSubscribtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveSubscribtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
