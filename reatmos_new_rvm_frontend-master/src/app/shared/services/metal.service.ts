import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetalService {

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getMetalStatus() {
    return this.http.get(this.apiUrl+"/get-metal-status");
  }

  getMetalData(){
    return  this.http.get(this.apiUrl+"/get-metal-data");
  }

  bypassMetal(active:boolean){
    return this.http.post(this.apiUrl+"/bypass-metal",{"active":active});
  }

}
