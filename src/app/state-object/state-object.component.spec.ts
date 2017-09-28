import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateObjectComponent } from './state-object.component';

describe('StateObjectComponent', () => {
  let component: StateObjectComponent;
  let fixture: ComponentFixture<StateObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
