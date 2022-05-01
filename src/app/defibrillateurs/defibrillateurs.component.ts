import { Component, OnInit } from '@angular/core';
import {PageHeader} from "../models/page-header.model";

@Component({
  selector: 'app-defibrillateurs',
  templateUrl: './defibrillateurs.component.html',
  styleUrls: ['./defibrillateurs.component.scss']
})
export class DefibrillateursComponent implements OnInit {

  pageHeader: PageHeader = {
    title : "Mes défibrillateurs",
    subtitle: "Retrouvez-ici tous vos défibrillateurs. Vous pouvez voir s’ils sont fonctionnels, s’ils nécessitent de la maintenance, et en rechercher un en particulier."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
