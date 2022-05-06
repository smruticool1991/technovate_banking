import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsecuredloanComponent } from './unsecuredloan.component';

describe('UnsecuredloanComponent', () => {
  let component: UnsecuredloanComponent;
  let fixture: ComponentFixture<UnsecuredloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsecuredloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsecuredloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
