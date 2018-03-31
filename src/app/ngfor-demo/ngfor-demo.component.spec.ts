import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforDemoComponent } from './ngfor-demo.component';

describe('NgforDemoComponent', () => {
  let component: NgforDemoComponent;
  let fixture: ComponentFixture<NgforDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
