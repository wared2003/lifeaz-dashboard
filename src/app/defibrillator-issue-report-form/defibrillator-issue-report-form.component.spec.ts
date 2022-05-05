import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefibrillatorIssueReportFormComponent } from './defibrillator-issue-report-form.component';

describe('DefibrillatorIssueReportFormComponent', () => {
  let component: DefibrillatorIssueReportFormComponent;
  let fixture: ComponentFixture<DefibrillatorIssueReportFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefibrillatorIssueReportFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrillatorIssueReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
