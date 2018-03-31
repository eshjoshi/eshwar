import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipeComponentComponent } from './custom-pipe-component.component';

describe('CustomPipeComponentComponent', () => {
  let component: CustomPipeComponentComponent;
  let fixture: ComponentFixture<CustomPipeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomPipeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
