import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefibrillateursComponent } from './defibrillateurs.component';

describe('DefibrillateursComponent', () => {
  let component: DefibrillateursComponent;
  let fixture: ComponentFixture<DefibrillateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefibrillateursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrillateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
