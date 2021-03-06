import {Component, Input, OnInit} from '@angular/core';
import {PageHeader} from "../models/page-header.model";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {

  @Input() pageHeader!: PageHeader;

  constructor() { }

  ngOnInit(): void {
  }

}
