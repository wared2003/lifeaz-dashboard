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

@NgModule({
  declarations: [
    AppComponent,
    DefibrillateursComponent,
    CommandesComponent,
    NavigationMenuComponent,
    PageHeaderComponent,
    DefibrillateursArrayComponent,
    DefibrillateursArrayRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
