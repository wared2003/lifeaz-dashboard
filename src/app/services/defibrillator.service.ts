import { Injectable } from '@angular/core';
import {Defibrillator} from "../models/defibrillator.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DefibrillatorService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Defibrillator[]> {
    return this.http.get<Defibrillator[]>('http://localhost:5050/api/defibrillators')   // get all defibrillators
  }
}
