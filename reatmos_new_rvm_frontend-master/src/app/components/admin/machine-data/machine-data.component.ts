import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MachineDataService } from 'src/app/shared/services/machine-data.service';

@Component({
  selector: 'app-machine-data',
  templateUrl: './machine-data.component.html',
  styleUrls: ['./machine-data.component.scss']
})
export class MachineDataComponent implements OnInit{
  totalBottles:number = 10;
  totalCans:number = 12;
  totalPolybags: number = 50;
  
  constructor(
    private toastr: ToastrService,
    private machineDataServie: MachineDataService
  ) {

      this.getData();

   }

  ngOnInit() { }

  resetData(){
    this.machineDataServie.clearMachineData().subscribe((res:any) => {
      this.totalBottles = 0;
      this.totalCans = 0;
      this.totalPolybags = 0;
      this.toastr.warning("Local Data Counter Reset", "Warning");
    },
    (err:any) => {
      this.toastr.error(err.error.message);
    });
  }

  getData(){
    this.machineDataServie.getMachineData().subscribe((res:any) => {
      this.totalBottles = res.bottles;
      this.totalCans = res.cans;
      this.totalPolybags = res.polybags;
    },
    (err:any) => {
      this.toastr.error(err.error.message);
    });
  }
  


}
