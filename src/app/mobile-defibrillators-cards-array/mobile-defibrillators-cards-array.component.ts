import { Component, OnInit } from '@angular/core';
import {Defibrillator} from "../models/defibrillator.model";
import {DefibrillatorService} from "../services/defibrillator.service";

@Component({
  selector: 'app-mobile-defibrillators-cards-array',
  templateUrl: './mobile-defibrillators-cards-array.component.html',
  styleUrls: ['./mobile-defibrillators-cards-array.component.scss']
})
export class MobileDefibrillatorsCardsArrayComponent implements OnInit {

  defibrillators!: Defibrillator[];

  constructor(private defibrillatorService: DefibrillatorService) { }

  ngOnInit(): void {
    this.defibrillators = this.defibrillatorService.getAll()
  }

}
