import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowheelerloanComponent } from './twowheelerloan.component';

describe('TwowheelerloanComponent', () => {
  let component: TwowheelerloanComponent;
  let fixture: ComponentFixture<TwowheelerloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowheelerloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowheelerloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
