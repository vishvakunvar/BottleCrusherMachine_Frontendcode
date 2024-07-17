import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, filter, switchMap, timer } from 'rxjs';
import { BinServiceService } from 'src/app/shared/services/bin-service.service';

@Component({
  selector: 'app-bin',
  templateUrl: './bin.component.html',
  styleUrls: ['./bin.component.scss']
})
export class BinComponent implements OnInit{
  binSensorConfig: any;

  offDisabled = false;
  onDisabled = false;
  dataSubscription: Subscription;
  pauseDataService = false;

  sensorStatus:boolean = true;


  constructor(
    private toastr: ToastrService,
    private binService: BinServiceService
  ) {
    this.binService.getBinStatus().subscribe((data:any)=>{
      this.binSensorConfig = data;
      if(this.binSensorConfig.active == true){
        this.onDisabled = true;
      }else{
        this.offDisabled = true;
        this.pauseDataService = true;
      }
    },
    (error)=>{
      this.toastr.error('Error Fetching Bin Sensor Info', 'Error');
    });

    this.dataSubscription = timer(0,1000)
    .pipe(
      switchMap(()=>this.binService.getBinData())
    )
    .pipe(
      filter((data: any) => {
        return !this.pauseDataService;
      })
    ).subscribe(
      (data:any)=>{
        this.sensorStatus = data["binful"];
        console.log(this.sensorStatus);
      },
      (error)=>{
        this.toastr.error('Error Fetching Bin Sensor Data', 'Error');
      }
    );
    
  }


  ngOnInit() {}


  byPass(){
    this.binService.bypassBin(false).subscribe(
      (data:any)=>{
        this.pauseDataService = true;
        this.binSensorConfig.active = !this.binSensorConfig.active;
        this.offDisabled = !this.offDisabled;
        this.onDisabled = !this.onDisabled;
        this.toastr.warning('Bin Sensor Bypassed', 'Warning');
      },
      (error)=>{
        this.toastr.error('Error Bypassing Bin Sensor', 'Error');
      }
    );
  }

  removeByPass(){
    this.binService.bypassBin(true).subscribe(
      (data:any)=>{
        this.pauseDataService = false;
        this.binSensorConfig.active = !this.binSensorConfig.active;
        this.offDisabled = !this.offDisabled;
        this.onDisabled = !this.onDisabled;
        this.toastr.success('Bin Sensor Bypass Removed', 'Success');
      },
      (error)=>{
        this.toastr.error('Error Removing Bin Sensor Bypass', 'Error');
      }
    );
  }

  ngOnDestroy(){
    this.dataSubscription.unsubscribe();
  }

}
