import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MachineDataService {

  apiUrl = Config.baseUrl

  constructor(
    private http: HttpClient
  ) { }

  getMachineData() {
    return this.http.get(this.apiUrl + '/get-machine-data');
  }

  clearMachineData(){
    return this.http.get(this.apiUrl + '/clear-machine-data');
  }

  getMachineInfo(){
    return this.http.get(this.apiUrl + '/get-machine-info');
  }

  updateMachineInfo(data:any){
    return this.http.post(this.apiUrl + '/update-machine-info', data);
  }
}
