import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSavingsDialogComponent } from './add-savings-dialog.component';

describe('AddSavingsDialogComponent', () => {
  let component: AddSavingsDialogComponent;
  let fixture: ComponentFixture<AddSavingsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSavingsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSavingsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
