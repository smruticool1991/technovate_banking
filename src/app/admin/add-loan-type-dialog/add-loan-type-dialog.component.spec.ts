import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanTypeDialogComponent } from './add-loan-type-dialog.component';

describe('AddLoanTypeDialogComponent', () => {
  let component: AddLoanTypeDialogComponent;
  let fixture: ComponentFixture<AddLoanTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddLoanTypeDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
