import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DefibrillateursArrayComponent } from './defibrillateurs-array.component';

describe('DefibrillateursArrayComponent', () => {
  let component: DefibrillateursArrayComponent;
  let fixture: ComponentFixture<DefibrillateursArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefibrillateursArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefibrillateursArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
