import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, filter, switchMap, timer } from 'rxjs';
import { MetalService } from 'src/app/shared/services/metal.service';

@Component({
  selector: 'app-metal',
  templateUrl: './metal.component.html',
  styleUrls: ['./metal.component.scss']
})
export class MetalComponent implements OnInit{

  metalSensorConfig: any;

  offDisabled = false;
  onDisabled = false;
  pauseDataService:boolean = false;
  dataServiceSubscription:Subscription

  sensorStatus:boolean = true;


  constructor(
    private toastr: ToastrService,
    private metalService: MetalService,
  ) {
      this.metalService.getMetalStatus().subscribe((data:any)=>{
        this.metalSensorConfig = data;
        if(this.metalSensorConfig.active){
          this.onDisabled = true;
        }else{
          this.offDisabled = true;
          this.pauseDataService = true;
        }
      }, (error)=>{
          this.toastr.error('Error while fetching metal sensor status', 'Error');
      });

      this.dataServiceSubscription = timer(0,1000)
      .pipe(
        switchMap(() => this.metalService.getMetalData())
      )
      .pipe(
        filter((data:any)=>{
          return !this.pauseDataService;
        })
      ).subscribe(
        (data:any)=>{
          this.sensorStatus = data.metal;
          console.log(this.sensorStatus);
        }
      )
    
  }


  ngOnInit() {}


  byPass(){
    this.metalService.bypassMetal(false).subscribe((data:any)=>{
      this.metalSensorConfig.active = !this.metalSensorConfig.active;
      this.pauseDataService = !this.pauseDataService;
      this.offDisabled = !this.offDisabled;
      this.onDisabled = !this.onDisabled;
      this.toastr.warning('Metal Sensor Bypassed', 'Warning');
    }, (error)=>{
      this.toastr.error('Error while bypassing metal sensor', 'Error');
    });
  }

  removeByPass(){
    this.metalService.bypassMetal(true).subscribe((data:any)=>{
      this.metalSensorConfig.active = !this.metalSensorConfig.active;
      this.pauseDataService = !this.pauseDataService;
      this.offDisabled = !this.offDisabled;
      this.onDisabled = !this.onDisabled;
      this.toastr.success('Metal Sensor Bypass Removed', 'Success');
      }, (error)=>{
        this.toastr.error('Error while removing bypass of metal sensor', 'Error');
    });
  }


  ngOnDestroy(){
    this.dataServiceSubscription.unsubscribe();
  }

}
