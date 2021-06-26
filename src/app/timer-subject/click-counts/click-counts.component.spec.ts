import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCountsComponent } from './click-counts.component';

describe('ClickCountsComponent', () => {
  let component: ClickCountsComponent;
  let fixture: ComponentFixture<ClickCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
