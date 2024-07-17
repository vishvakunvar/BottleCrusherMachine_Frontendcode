import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class BottleBlocService {

  apiUrl = Config.baseUrl;
  constructor(
    private http: HttpClient
  ) { }

    triggerCrush(bottle: boolean, can: boolean, polybag: boolean, trigger: boolean, dataID: string){
        let data = {
            "bottle": bottle,
            "can": can,
            "polybag": polybag,
            "trigger": trigger,
            "dataID": dataID
        }
        return this.http.post(this.apiUrl + '/trigger-conv-crusher-data', data);
    }

    uploadImagesCloud(data: any){
        return this.http.post(this.apiUrl + '/upload-images-cloud', data);
    }

}
