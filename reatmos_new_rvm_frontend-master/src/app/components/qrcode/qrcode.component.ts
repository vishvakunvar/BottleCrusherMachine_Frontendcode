import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, timer } from 'rxjs';
import { DataService } from 'src/app/shared/services/data.service';


@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.scss']
})
export class QrcodeComponent implements OnInit{

  counter:number = 60;

  timerSubscription: Subscription;

  data: any = {
    dataID: '',
    machineID: '',
    bottles: 0,
    cans: 0,
    plastic: 0,
  };
  dataString:string = '';

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService
  ){
    this.activatedRoute.queryParams.subscribe(params => {
      this.data.dataID = params['dataID'];
      this.data.machineID = params['machineID'];
      this.data.bottles = params['bottles'];
      this.data.cans = params['cans'];
      this.data.plastic = params['plastic'];
    });
    this.dataString = JSON.stringify(this.data);
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      if(this.counter > 0){
        this.counter--;
      }else{
        this.timerSubscription.unsubscribe();
        this.router.navigate(['/thank']);
      }
  });
  
  this.dataService.postUserData(this.data).subscribe(
    (data:any) => {
      console.log(data);
    }
  );

  this.dataService.uploadImagesToCloud(this.data.dataID).subscribe(
    (data:any) => {
      console.log(data);
    }
  );
  }

  ngOnInit() { }

  next(){
    let data = {
      id: this.data.dataID,
      mcid: this.data.machineID,
      bottles: this.data.bottles,
      cans: this.data.cans,
      polybags: this.data.plastic,
    }

    this.dataService.postUserData(data).subscribe(
      (data:any) => {
        console.log(data);
      }
    );
    
    this.router.navigate(['/thank']);
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

}
