import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {DefibrilattorIssue} from "../models/defibrilattor-issue.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DeffibrillatorIssueService {

  constructor(private http: HttpClient) {}


  //get issues from db



  //add ne issue to db
  addIssue(issue :DefibrilattorIssue) : Observable<any>{
    return this.http.post<DefibrilattorIssue>(`${environment.apiUrl}/defibrillatorIssues`, issue)
  }
}
