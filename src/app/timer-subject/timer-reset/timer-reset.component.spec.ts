import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerResetComponent } from './timer-reset.component';

describe('TimerResetComponent', () => {
  let component: TimerResetComponent;
  let fixture: ComponentFixture<TimerResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerResetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
