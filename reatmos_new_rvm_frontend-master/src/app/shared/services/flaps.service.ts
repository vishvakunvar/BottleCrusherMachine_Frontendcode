import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlapsService {

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getFlapInfo(){
    return this.http.get(this.apiUrl+'/get-flap-status');
  }

  triggerFlap(pin:number,trig:boolean){
    return this.http.post(this.apiUrl+'/gpio-trigger', {"pin":pin,"trig":trig});
  }

}
