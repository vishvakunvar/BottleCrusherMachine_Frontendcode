import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ConveyorCrusherMaintainanceService } from 'src/app/shared/services/conveyor-crusher-maintainance.service';


@Component({
  selector: 'app-conveyor-crusher',
  templateUrl: './conveyor-crusher.component.html',
  styleUrls: ['./conveyor-crusher.component.scss']
})
export class ConveyorCrusherComponent implements OnInit{

   data: any;

    btnDisabled = false;

    constructor(
      private toastr: ToastrService,
      private convChrusherMaintainance: ConveyorCrusherMaintainanceService
    ) {
      this.convChrusherMaintainance.getConvCrusherInfo ().subscribe(
        (data) => {
          this.data = data;
        },
        (error) => {
          console.log(error);
        }
      );
     }

    ngOnInit() {

    }

    conveyorFw(){
      this.convChrusherMaintainance.gpioTrigger(this.data.conveyor_fw.pin, true).subscribe(
        (data) => {
          this.btnDisabled = true;
        this.toastr.error('Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
        setTimeout(() => {
          this.convChrusherMaintainance.gpioTrigger(this.data.conveyor_fw.pin, false).subscribe(
            (data) => {
              this.btnDisabled = false;
              this.toastr.success('Conveyor Forward Completed', 'Success!', {timeOut: 2000});
            },(error)=>{
              this.toastr.error('Failed Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
            }
          );
        }, 6000);
        },(error)=>{
          this.toastr.error('Failed Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
        }
      );
    }


    conveyorRw(){
      this.convChrusherMaintainance.gpioTrigger(this.data.conveyor_rw.pin, true).subscribe(
        (data) => {
          this.btnDisabled = true;
        this.toastr.error('Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
        setTimeout(() => {
          this.convChrusherMaintainance.gpioTrigger(this.data.conveyor_rw.pin, false).subscribe(
            (data) => {
              this.btnDisabled = false;
              this.toastr.success('Conveyor Forward Completed', 'Success!', {timeOut: 2000});
            },(error)=>{
              this.toastr.error('Failed Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
            }
          );
        }, 6000);
        },(error)=>{
          this.toastr.error('Failed Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
        }
      );
    }

    crusher(){
      this.convChrusherMaintainance.gpioTrigger(this.data.crusher.pin, true).subscribe(
        (data) => {
          this.btnDisabled = true;
        this.toastr.error('Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
        setTimeout(() => {
          this.convChrusherMaintainance.gpioTrigger(this.data.crusher.pin, false).subscribe(
            (data) => {
              this.btnDisabled = false;
              this.toastr.success('Conveyor Forward Completed', 'Success!', {timeOut: 2000});
            },(error)=>{
              this.toastr.error('Failed Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
            }
          );
        }, 6000);
        },(error)=>{
          this.toastr.error('Failed Conveyor Forward Triggerred', 'Danger!', {timeOut: 2000});
        }
      );

    }

}
