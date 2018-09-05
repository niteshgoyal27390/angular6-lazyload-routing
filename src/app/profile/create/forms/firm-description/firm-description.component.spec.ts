import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirmDescriptionComponent } from './firm-description.component';

describe('FirmDescriptionComponent', () => {
  let component: FirmDescriptionComponent;
  let fixture: ComponentFixture<FirmDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirmDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
