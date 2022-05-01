import {Component, OnInit} from '@angular/core';
import {DefibrillatorService} from "../services/defibrillator.service";
import {Defibrillator} from "../models/defibrillator.model";
@Component({
  selector: 'app-defibrillateurs-array',
  templateUrl: './defibrillateurs-array.component.html',
  styleUrls: ['./defibrillateurs-array.component.scss']
})
export class DefibrillateursArrayComponent implements OnInit {

  defibrillators: Defibrillator[] = [];

  constructor(private defibrillatorService: DefibrillatorService ) { }

  ngOnInit(): void {
    let data = this.defibrillatorService.getAll()
    data.forEach((item :Defibrillator)=>{
      let defibrillator: Defibrillator;
      defibrillator = new Defibrillator(item.serial, item.locationName, item.locationAddr, item.state, item.electrodesExpiry);
      this.defibrillators.push(defibrillator);
    })
  };

}
