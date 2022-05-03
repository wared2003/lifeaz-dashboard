import {Component, Input, OnInit} from '@angular/core';
import {Defibrillator} from "../models/defibrillator.model";

@Component({
  selector: 'app-mobile-defibrillator-card',
  templateUrl: './mobile-defibrillator-card.component.html',
  styleUrls: ['./mobile-defibrillator-card.component.scss']
})
export class MobileDefibrillatorCardComponent implements OnInit {
  @Input() defibrillator!: Defibrillator

  constructor() { }

  ngOnInit(): void {

  }

}
