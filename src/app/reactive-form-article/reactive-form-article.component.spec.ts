import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormArticleComponent } from './reactive-form-article.component';

describe('ReactiveFormArticleComponent', () => {
  let component: ReactiveFormArticleComponent;
  let fixture: ComponentFixture<ReactiveFormArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
