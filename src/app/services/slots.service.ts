import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SlotsService {

  constructor(private http: HttpClient) { }
  public getSlotsCategories(): Observable<any> {
    return this.http.get(`https://cms.crocobet.com/integrations?type=slot&platform=desktop`);
  }
  public getSlotsProvaiders(): Observable<any> {
    return this.http.get(`https://cms.crocobet.com/integrations/v2/slot/categories?include=games`);
  }
  public getSlotsByProvider(provider:string): Observable<any> {
    return this.http.get(`https://cms.crocobet.com/integrations/v2/slot/providers/${provider}?platform=desktop&tpg`);
  }
}
