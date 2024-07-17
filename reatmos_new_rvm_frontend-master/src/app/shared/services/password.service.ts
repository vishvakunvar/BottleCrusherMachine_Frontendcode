import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  apiUrl = Config.baseUrl;

  constructor(
    private http: HttpClient,
  ) { }


  getPassword() {
    return this.http.get(this.apiUrl + '/get-password');
  }

  updatePassword(passwordData: string) {
    return this.http.post(this.apiUrl + '/set-password', {"password":passwordData});
  }

}
