import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, switchMap, timer } from 'rxjs';
import { BottleBlocService } from 'src/app/shared/services/bottle-bloc.service';
import { ConveyorCrusherMaintainanceService } from 'src/app/shared/services/conveyor-crusher-maintainance.service';
import { MachineDataService } from 'src/app/shared/services/machine-data.service';
import { SensorsService } from 'src/app/shared/services/sensors.service';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.scss']
})

export class BottleComponent implements OnInit{

  totalBottleCount:number = 0;
  totalCanCount:number = 0;
  totalPolybagCount:number = 0;
  hideButtons:boolean = false;
  isCrushing: boolean = false;
  counter:number = 60;
  disableButton:boolean = false;
  statusColor:string = "green";
  showStatus:boolean = false;
  machineID: string = '';
  timeStamp: string = '';
  dataID: string = '';
  dateTimeObj = new Date();
  status:string = "Bottle is crushing please wait...";

  conveyorCrusherData:any;
  counterSubsription: Subscription;
  dataSubscription: Subscription;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private sensorsService: SensorsService,
    private machineData: MachineDataService,
    private bottleBlocService: BottleBlocService,
    private conCrushService: ConveyorCrusherMaintainanceService,
    
  ) {

    this.conCrushService.getConvCrusherInfo().subscribe(
      (data:any)=>{
        this.conveyorCrusherData = data;
      },(error)=>{
        console.log(error);
      }
    );

    this.machineData.getMachineInfo().subscribe(
      (data:any) => {
        this.machineID = data.mcid;
        this.timeStamp = this.dateTimeObj.toLocaleString();

        this.timeStamp = this.timeStamp.replace(' ', '');
        this.timeStamp = this.timeStamp.replace('/', '');
        this.timeStamp = this.timeStamp.replace('/', '');
        this.timeStamp = this.timeStamp.replace(',', '');
        this.timeStamp = this.timeStamp.replace(':', '');
        this.timeStamp = this.timeStamp.replace(':', '');
        this.timeStamp = this.timeStamp.replace(' ', '');

        this.dataID = this.machineID + this.timeStamp;
        console.log(this.dataID);
      },(err) => {
        toastr.error("Something went wrong please try again later");
        router.navigate(['/home']);
      });

    this.activatedRoute.data.subscribe(
      (data:any) => {
        if(data.polybag){
          this.totalPolybagCount += 1;
        }
    });

    this.counterSubsription = timer(0,1000).pipe(
      ).subscribe(
          ()=>{
            if(this.counter > 0){
              this.counter--;
            }else{
              this.counterSubsription.unsubscribe();
              this.next();
          }
        }
      );
      // this.counterSubsription.unsubscribe();
    
      this.dataSubscription = timer(0, 700).
        pipe(
          switchMap( () => this.sensorsService.getSensorsData())
        ).subscribe(
          (data: any) => {
            this.decider(data);
          },(err) => {
            toastr.error("Something went wrong please try again later");
            router.navigate(['/home']);
          });
    
   }

  ngOnInit() { }

  crush(dataID: string, bottle: boolean, can: boolean, polybag: boolean){
    let trigger = polybag? false: true;
    let timeOut = polybag? 2000: 8000;

    this.bottleBlocService.triggerCrush(bottle, can, polybag, trigger, dataID).subscribe(
    (data)=>{
      setTimeout(() => {
        this.bottleBlocService.triggerCrush(bottle, can, polybag, false, dataID).subscribe(
          (data:any) => {
            console.log(data);
          },(err) => {
            this.toastr.error("Something went wrong please try again later");
            this.router.navigate(['/home']);
          }
        )
        this.isCrushing = false;
        this.hideButtons = false;
      }, timeOut);
    },(err) => {
      this.toastr.error("Something went wrong please try again later");
      this.router.navigate(['/home']);
    }
  );


  }

  reverseConvActive(){

    this.conCrushService.gpioTrigger(this.conveyorCrusherData.conveyor_rw.pin,true)
    .subscribe(
      (data:any)=>{
        setTimeout(()=>{
          this.resetConvActive();
        },4000);
      },(error)=>{
        this.toastr.error(error.message,'Error');
      }
    );

  }

  resetConvActive(){
      
      this.conCrushService.gpioTrigger(this.conveyorCrusherData.conveyor_rw.pin,false)
      .subscribe(
        (data:any)=>{
          this.isCrushing = false;
          this.hideButtons = false;
        },(error)=>{
          this.toastr.error(error.message,'Error');
        }
      );
  
  }

  decider(data:any){
    if(!this.isCrushing){

      //for bottle        
      if(data.bottleStatus && (data.weight > 0 && data.weight < 100)){
        console.log(data.bottleStatus);
        console.log(data.weight);
        this.isCrushing = true;
        this.hideButtons = true;
        this.totalBottleCount = this.totalBottleCount + 1;
        this.counter = 60;
        this.crush(this.dataID, true, false, false);
      }else if(data.bottleStatus && data.weight > 100){
        this.counter = 60;
        this.isCrushing = true;
        this.hideButtons = true;
        this.reverseConvActive();
        this.toastr.error("Error","Please empty the bottle", {timeOut: 3000});
      }

      //for polybag
      if(data.polybag){
        console.log(data.bottleStatus);
        console.log(data.weight);
        this.isCrushing = true;
        this.hideButtons = true;
        this.totalPolybagCount = this.totalPolybagCount + 1;
        this.counter = 60;
        this.crush(this.dataID, false, false, true);
      }

      //for can
      if(data.metal && (data.weight > 0 && data.weight < 30)){
        this.isCrushing = true;
        this.hideButtons = true;
        this.totalCanCount = this.totalCanCount + 1;
        this.counter = 60;
        this.crush(this.dataID, false, true, false);
      }else if(data.metal && data.weight > 30){
        this.isCrushing = true;
        this.hideButtons = true;
        this.counter = 60;
        this.reverseConvActive();
        this.router.navigateByUrl('/can-error');
      }

    }
  }

  saveData(){
    let data = {
      "dataID": this.dataID,
    }
    this.bottleBlocService.uploadImagesCloud(data).subscribe(
      (data:any) => {
        console.log(data);
      },(err) => {
        this.toastr.error("Something went wrong please try again later");
        this.router.navigate(['/home']);
      }
    );
  }

  back(){
    this.disableButton = true;
    this.saveData();
    this.router.navigate(['/home']);
  }

  next(){
    this.disableButton = true;
    this.saveData();
    this.router.navigate(['/qr-code'], {queryParams: {totalBottleCount: this.totalBottleCount, totalCanCount: this.totalCanCount, totalPolybagCount: this.totalPolybagCount, dataID: this.dataID, machineID: this.machineID, timeStamp: this.timeStamp}});
  }

  ngOnDestroy() { 
    this.counterSubsription.unsubscribe();
    this.dataSubscription.unsubscribe();
  }

}
