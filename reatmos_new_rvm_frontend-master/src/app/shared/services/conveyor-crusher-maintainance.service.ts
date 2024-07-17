import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ConveyorCrusherMaintainanceService {

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getConvCrusherInfo(){
    return this.http.get(this.apiUrl + '/get-crusher-conv-info');
  }

  gpioTrigger(pin:number, trig:boolean){
    return this.http.post(this.apiUrl + '/gpio-trigger', {"pin": pin, "trig": trig});
  }
}
