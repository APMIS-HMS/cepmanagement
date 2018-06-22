import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionCaderComponent } from './profession-cader.component';

describe('ProfessionCaderComponent', () => {
  let component: ProfessionCaderComponent;
  let fixture: ComponentFixture<ProfessionCaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionCaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionCaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
