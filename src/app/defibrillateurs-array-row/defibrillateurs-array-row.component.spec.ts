import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefibrillateursArrayRowComponent } from './defibrillateurs-array-row.component';

describe('DefibrillateursArrayRowComponent', () => {
  let component: DefibrillateursArrayRowComponent;
  let fixture: ComponentFixture<DefibrillateursArrayRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefibrillateursArrayRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrillateursArrayRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
