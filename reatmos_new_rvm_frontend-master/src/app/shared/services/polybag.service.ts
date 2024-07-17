import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PolybagService {

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient,    
  ) { }


  getPolybagStatus(){
    return this.http.get(this.apiUrl + '/get-polybag-status');
  }

  getPolybagData(){
    return this.http.get(this.apiUrl + '/get-polybag-data');
  }

  bypassPolybag(active:boolean){
    return this.http.post(this.apiUrl + '/bypass-polybag', {"active": active});
  }
}
