import { Component, OnInit } from '@angular/core';
import {PageHeader} from "../models/page-header.model";

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {

  pageHeader: PageHeader = {
    title: "mes commandes",
    subtitle: "Retrouvez-ici toutes vos commandes."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
