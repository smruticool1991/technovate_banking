import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedcarloanComponent } from './usedcarloan.component';

describe('UsedcarloanComponent', () => {
  let component: UsedcarloanComponent;
  let fixture: ComponentFixture<UsedcarloanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedcarloanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedcarloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
