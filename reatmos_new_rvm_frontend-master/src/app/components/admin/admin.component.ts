import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  

    constructor(
      private route: Router,private http: HttpClient
    ) {
        this.stopVideoFeed();
     }

    ngOnInit() {}

    stopVideoFeed(){
      this.http.get('http://localhost:5000/start_video_feed').subscribe();
    }

    startVideoFeed(){
      this.http.get('http://localhost:5000/start_video_feed').subscribe();
    }

    logout() {
      this.startVideoFeed();
      this.route.navigate(['/home']);
    }

}
