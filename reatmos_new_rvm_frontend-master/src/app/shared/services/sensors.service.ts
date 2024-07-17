import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getSensorsData(){
    return this.http.get(this.apiUrl + '/get-all-sensor-data');
  }
}
