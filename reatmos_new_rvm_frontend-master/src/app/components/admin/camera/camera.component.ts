import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit{

  videoUrl:string ='';

  constructor(private http: HttpClient) {
    this.startVideoFeed();
    this.getVideoFeed();
   }

  ngOnInit() {
   
  }

  
  startVideoFeed(){
    this.http.get('http://localhost:5000/start_video_feed').subscribe();
  }

  getVideoFeed() {
    this.videoUrl = 'http://localhost:5000/video_feed';
  }
  
  refresh(){
    window.location.reload();
  }
  

  ngOnDestroy() {
    this.http.get('http://localhost:5000/stop_video_feed').subscribe();
    console.log("destroyed");
  }

}
