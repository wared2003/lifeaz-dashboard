import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DefibrillateursComponent} from "./defibrillateurs/defibrillateurs.component";
import {CommandesComponent} from "./commandes/commandes.component";

const routes: Routes = [
  {path: '', component: DefibrillateursComponent},
  {path: 'commandes', component: CommandesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
