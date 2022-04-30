import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefibrillateursComponent } from './defibrillateurs/defibrillateurs.component';
import { CommandesComponent } from './commandes/commandes.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    DefibrillateursComponent,
    CommandesComponent,
    NavigationMenuComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
