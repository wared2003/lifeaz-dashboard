import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDefibrillatorCardComponent } from './mobile-defibrillator-card.component';

describe('MobileDefibrillatorCardComponent', () => {
  let component: MobileDefibrillatorCardComponent;
  let fixture: ComponentFixture<MobileDefibrillatorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDefibrillatorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDefibrillatorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
