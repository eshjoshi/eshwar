import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEshComponent } from './time-esh.component';

describe('TimeEshComponent', () => {
  let component: TimeEshComponent;
  let fixture: ComponentFixture<TimeEshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
