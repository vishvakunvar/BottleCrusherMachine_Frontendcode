import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subscription, filter, switchMap, timer } from 'rxjs';
import { WeightService } from 'src/app/shared/services/weight.service';

@Component({
  selector: 'app-weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class WeightComponent implements OnInit{
  weightSensorConfig: any;

  offDisabled = false;
  onDisabled = false;
  weightDataSubscription: Subscription;
  pauseDataService = false;

  referenceValue: number = 50;

  weightSensor: number = 0;

  constructor(
    private toastr: ToastrService,
    private weightService: WeightService
  ) {

    this.weightService.getWeightStatus().subscribe(
      (data)=>{
        this.weightSensorConfig = data;
        if(this.weightSensorConfig.active == true){
          this.onDisabled = true;
        }else{
          this.offDisabled = true;
          this.pauseDataService = true;
        }
      }
    );

    this.weightDataSubscription = timer(0,1000)
    .pipe(
      switchMap(()=>this.weightService.getWeightData())
    )
    .pipe(
      filter((data:any)=>{
        return !this.pauseDataService;
      })
    ).subscribe(
      (data:any)=>{
        this.weightSensor = data["weight"];
        console.log(this.weightSensor);
      },
      (error)=>{
        this.toastr.error('Error getting data from server', 'Error');
      }
    );


    
  }


  ngOnInit() {}


  byPass(){
    this.weightService.bypassWeight(false).subscribe(
      (data:any)=>{
        this.weightSensorConfig.active = !this.weightSensorConfig.active;
        this.offDisabled = !this.offDisabled;
        this.pauseDataService = !this.pauseDataService;
        this.onDisabled = !this.onDisabled;
        this.toastr.warning('Weight Sensor Bypassed', 'Warning');
      },(error)=>{
        this.toastr.error('Error getting data from server', 'Error');
      }
    );
  }

  removeByPass(){
    this.weightService.bypassWeight(true).subscribe(
      (data:any)=>{
        this.weightSensorConfig.active = !this.weightSensorConfig.active;
        this.offDisabled = !this.offDisabled;
        this.pauseDataService = !this.pauseDataService;
        this.onDisabled = !this.onDisabled;
        this.toastr.success('Weight Sensor Bypass Removed', 'Success');
      },(error)=>{
        this.toastr.error('Error getting data from server', 'Error');
      }
    );
  }

  setReferenceValue(){
    
    this.weightSensorConfig.reference = this.referenceValue;
    this.weightService.setReferenceValue(this.referenceValue).subscribe(
      (data:any)=>{
        this.toastr.success('Reference Value Set', 'Success');
      },(error)=>{
        this.toastr.error('Error getting data from server', 'Error');
      }
    )
  }

  ngOnDestroy(){
    this.weightDataSubscription.unsubscribe();
  }

}
