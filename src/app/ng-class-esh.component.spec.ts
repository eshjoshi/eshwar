import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassEshComponent } from './ng-class-esh.component';

describe('NgClassEshComponent', () => {
  let component: NgClassEshComponent;
  let fixture: ComponentFixture<NgClassEshComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassEshComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassEshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
