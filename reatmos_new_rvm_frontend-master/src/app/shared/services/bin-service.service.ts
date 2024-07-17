import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';
import { basePlacements } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class BinServiceService {
  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getBinData(){
    return this.http.get(this.apiUrl+'/get-binfull-data');
  }

  getBinStatus(){
    return this.http.get(this.apiUrl+'/get-binfull-status');
  }

  bypassBin(active:boolean){
    return this.http.post(this.apiUrl+'/bypass-binfull', {"active":active});
  }
}
