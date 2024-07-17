import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeightService {
  

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getWeightStatus(){
    return this.http.get(this.apiUrl+'/get-weight-status');
  }

  getWeightData(){
    return this.http.get(this.apiUrl+'/get-weight-data');
  }

  bypassWeight(active:boolean){
    return this.http.post(this.apiUrl+'/bypass-weight', {"active":active});
  }

  setReferenceValue(referenceValue: number) {
    return this.http.post(this.apiUrl+'/set-weight-reference', {"reference":referenceValue});
  }
}
