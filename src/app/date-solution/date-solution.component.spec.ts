import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateSolutionComponent } from './date-solution.component';

describe('DateSolutionComponent', () => {
  let component: DateSolutionComponent;
  let fixture: ComponentFixture<DateSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
