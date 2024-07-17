import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FlapsService } from 'src/app/shared/services/flaps.service';

@Component({
  selector: 'app-flaps',
  templateUrl: './flaps.component.html',
  styleUrls: ['./flaps.component.scss']
})
export class FlapsComponent implements OnInit{

  flapData:any
  btnDisabled = false;

  constructor(
    private toastr: ToastrService,
    private flapService: FlapsService
  ) { 
    this.flapService.getFlapInfo().subscribe((data:any)=>{
      this.flapData = data;
    });
  }

  ngOnInit() {}

  flapBottle() {
    this.flapService.triggerFlap(this.flapData.sorting_bottle.pin, true).subscribe((data:any)=>{
      this.btnDisabled = true;
      this.toastr.success('Flap Bottle Triggerred', 'Success!');
      setTimeout(() => {
        this.flapService.triggerFlap(this.flapData.sorting_bottle.pin, false).subscribe((data:any)=>{
          this.btnDisabled = false;
        }, (error)=>{
          this.toastr.error('Flap Bottle Trigger Failed', 'Error!');
        }
      );
      }, 1000);
    }, (error)=>{
      this.toastr.error('Flap Bottle Trigger Failed', 'Error!');
    });
  }

  flapCan() {
    this.flapService.triggerFlap(this.flapData.sorting_can.pin, true).subscribe((data:any)=>{
      this.btnDisabled = true;
      this.toastr.success('Flap Bottle Triggerred', 'Success!');
      setTimeout(() => {
        this.flapService.triggerFlap(this.flapData.sorting_can.pin, false).subscribe((data:any)=>{
          this.btnDisabled = false;
        }, (error)=>{
          this.toastr.error('Flap Bottle Trigger Failed', 'Error!');
        }
      );
      }, 1000);
    }, (error)=>{
      this.toastr.error('Flap Bottle Trigger Failed', 'Error!');
    });
  }


}
