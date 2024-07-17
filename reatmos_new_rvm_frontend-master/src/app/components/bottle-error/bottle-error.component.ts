import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConveyorCrusherMaintainanceService } from 'src/app/shared/services/conveyor-crusher-maintainance.service';

@Component({
  selector: 'app-bottle-error',
  templateUrl: './bottle-error.component.html',
  styleUrls: ['./bottle-error.component.scss']
})
export class BottleErrorComponent implements OnInit{

  conveyorCrusherData:any;

  constructor(
    private router:Router,
    private conCrushService: ConveyorCrusherMaintainanceService,
    private toastr: ToastrService
  ) { 

    this.conCrushService.getConvCrusherInfo().subscribe(
      (data:any)=>{
        this.conveyorCrusherData = data;
        this.reverseConvActive();
      },(error)=>{
        console.log(error);
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
          setTimeout(()=>{
            this.router.navigate(['/home']);
          },1000);
        },(error)=>{
          this.toastr.error(error.message,'Error');
        }
      );
  
  }

  ngOnInit(){
  }

  ngOnDestroy(){
    
  }

}
