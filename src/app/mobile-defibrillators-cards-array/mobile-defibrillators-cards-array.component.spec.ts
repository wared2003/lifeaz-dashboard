import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDefibrillatorsCardsArrayComponent } from './mobile-defibrillators-cards-array.component';

describe('MobileDefibrillatorsCardsArrayComponent', () => {
  let component: MobileDefibrillatorsCardsArrayComponent;
  let fixture: ComponentFixture<MobileDefibrillatorsCardsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileDefibrillatorsCardsArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDefibrillatorsCardsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
