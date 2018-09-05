import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotableMattersComponent } from './notable-matters.component';

describe('NotableMattersComponent', () => {
  let component: NotableMattersComponent;
  let fixture: ComponentFixture<NotableMattersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotableMattersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotableMattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
