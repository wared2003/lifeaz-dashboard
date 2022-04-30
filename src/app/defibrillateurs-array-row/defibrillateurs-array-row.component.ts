import {Component, Input, OnInit} from '@angular/core';
import {Defibrillator} from "../models/defibrillator.model";

@Component({
  selector: 'app-defibrillateurs-array-row',
  templateUrl: './defibrillateurs-array-row.component.html',
  styleUrls: ['./defibrillateurs-array-row.component.scss']
})
export class DefibrillateursArrayRowComponent implements OnInit {
  @Input() defibrillator!: Defibrillator;

  constructor() {

  }

  ngOnInit(): void {

  }

}
