import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
})
export class NavigationMenuComponent implements OnInit{

  isOpen: boolean = false;
  urlpath: string = window.location.pathname

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    console.log('ddd')
    if(this.isOpen){
      this.isOpen = false
    }else{
      this.isOpen = true
    }
  }



  refreshUrlPath(){
    this.urlpath = window.location.pathname;
  }

}
