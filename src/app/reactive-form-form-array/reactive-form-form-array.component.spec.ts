import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormFormArrayComponent } from './reactive-form-form-array.component';

describe('ReactiveFormFormArrayComponent', () => {
  let component: ReactiveFormFormArrayComponent;
  let fixture: ComponentFixture<ReactiveFormFormArrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormFormArrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
