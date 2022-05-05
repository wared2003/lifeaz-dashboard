import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefibrillatorIssueReportFormTextFormComponent } from './defibrillator-issue-report-form-text-form.component';

describe('DefibrillatorIssueReportFormTextFormComponent', () => {
  let component: DefibrillatorIssueReportFormTextFormComponent;
  let fixture: ComponentFixture<DefibrillatorIssueReportFormTextFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefibrillatorIssueReportFormTextFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrillatorIssueReportFormTextFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
