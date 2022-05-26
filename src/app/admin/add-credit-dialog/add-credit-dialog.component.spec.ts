import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCreditDialogComponent } from './add-credit-dialog.component';

describe('AddCreditDialogComponent', () => {
  let component: AddCreditDialogComponent;
  let fixture: ComponentFixture<AddCreditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCreditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCreditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
