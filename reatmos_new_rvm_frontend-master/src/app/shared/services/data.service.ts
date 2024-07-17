import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  postUserData(data:any){
    return this.http.post(this.apiUrl + '/post-user-data', data);
  }

  uploadImagesToCloud(dataID:string){
    return this.http.post(this.apiUrl + '/upload-images-cloud', {dataID: dataID});
  }
}
