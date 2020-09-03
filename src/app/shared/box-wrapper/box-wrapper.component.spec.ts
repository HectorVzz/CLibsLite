import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWrapperComponent } from './box-wrapper.component';

describe('BoxWrapperComponent', () => {
  let component: BoxWrapperComponent;
  let fixture: ComponentFixture<BoxWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
