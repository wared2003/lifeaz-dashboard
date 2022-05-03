import {AfterViewInit, Component, OnChanges, OnInit} from '@angular/core';
import {PageHeader} from "../models/page-header.model";

@Component({
  selector: 'app-defibrillateurs',
  templateUrl: './defibrillateurs.component.html',
  styleUrls: ['./defibrillateurs.component.scss']
})
export class DefibrillateursComponent implements OnInit, AfterViewInit{

  pageHeader: PageHeader = {
    title : "Mes défibrillateurs",
    subtitle: "Retrouvez-ici tous vos défibrillateurs. Vous pouvez voir s’ils sont fonctionnels, s’ils nécessitent de la maintenance, et en rechercher un en particulier."
  };

  isMobile!: boolean;

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 767) { // 768px portrait
      this.isMobile = true;
    }else
      this.isMobile = false;
  }

/*check if the screen is mobile on resize event and change the isMobile variable  to true  or false*/
  ngAfterViewInit(): void {
    window.addEventListener("resize", () => {
      console.log("resize" + window.innerWidth);
      if (window.innerWidth < 767) { // 767px portrait
        this.isMobile = true;
      }else
        this.isMobile = false;
    });
  }

}
