import {Component, Input} from '@angular/core';
import {PageHeader} from "../models/page-header.model";

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent{

  @Input() pageHeader!: PageHeader;

}
