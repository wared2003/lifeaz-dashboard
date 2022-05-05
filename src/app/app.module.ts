import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefibrillateursComponent } from './defibrillateurs/defibrillateurs.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { DefibrillateursArrayComponent } from './defibrillateurs-array/defibrillateurs-array.component';
import { DefibrillateursArrayRowComponent } from './defibrillateurs-array-row/defibrillateurs-array-row.component';
import { MobileDefibrillatorCardComponent } from './mobile-defibrillator-card/mobile-defibrillator-card.component';
import { MobileDefibrillatorsCardsArrayComponent } from './mobile-defibrillators-cards-array/mobile-defibrillators-cards-array.component';
import {HttpClientModule} from "@angular/common/http";
import { DefibrillatorIssueReportFormComponent } from './defibrillator-issue-report-form/defibrillator-issue-report-form.component';
import { DefibrillatorIssueReportFormTextFormComponent } from './defibrillator-issue-report-form-text-form/defibrillator-issue-report-form-text-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DefibrillateursComponent,
    CommandesComponent,
    NavigationMenuComponent,
    PageHeaderComponent,
    DefibrillateursArrayComponent,
    DefibrillateursArrayRowComponent,
    MobileDefibrillatorCardComponent,
    MobileDefibrillatorsCardsArrayComponent,
    DefibrillatorIssueReportFormComponent,
    DefibrillatorIssueReportFormTextFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
