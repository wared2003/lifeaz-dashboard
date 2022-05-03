import { Injectable } from '@angular/core';
import {Defibrillator} from "../models/defibrillator.model";

@Injectable({
  providedIn: 'root'
})
export class DefibrillatorService {
  private defibrilators: Defibrillator[] = [
    {
      "serial": "CLA012345678",
      "locationName": "Mairie d'Elattes",
      "locationAddr": "12 Rue Jacques Prévert, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA123456789",
      "locationName": "Gymnase Pierre Peyroche",
      "locationAddr": "1Bis Place des Combattants, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA234567890",
      "locationName": "École Municipale",
      "locationAddr": "26 Rue Jacques Prévert, 42980 Elattes",
      "state": 2,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA345678901",
      "locationName": "Épicerie Samoreau",
      "locationAddr": "17 Boulevard du Commandant Kelchmin, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA456789012",
      "locationName": "Moussa&Telli Réparation Informatique",
      "locationAddr": "90 Impasse des Cèdres, 42980 Elattes",
      "state": 1,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA567890123",
      "locationName": "Boucherie Boussal",
      "locationAddr": "3 Rue Félidée, 42980 Elattes",
      "state": 2,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA678901234",
      "locationName": "Scierie Dubois&Fils",
      "locationAddr": "649 Route de Lyon, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA789012345",
      "locationName": "It'tif Coiffure Mixte",
      "locationAddr": "19 Boulevard Lévy, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA890123456",
      "locationName": "Ferme Sarbise Laine & Tricotée",
      "locationAddr": "40 Route de Lyon, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
    {
      "serial": "CLA901234567",
      "locationName": "Garage Quérin-Gogheräuss",
      "locationAddr": "12 Rue Jacques Prévert, 42980 Elattes",
      "state": 0,
      "electrodesExpiry": "2025-10-05"
    },
  ]


  constructor() { }

  getAll() {
    return this.defibrilators
  }
}
