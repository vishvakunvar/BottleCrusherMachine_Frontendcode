import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MachineDataService } from 'src/app/shared/services/machine-data.service';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.component.html',
  styleUrls: ['./machine.component.scss']
})
export class MachineComponent implements OnInit{
  
  machineId: string = "";
  area: string = "";
  city: string = "";
  state: string = "";
  country: string = "";
  phone: string = "";

  

  

  constructor(
    private toastr: ToastrService,
    private machineDataService: MachineDataService
  ) {

      this.machineDataService.getMachineInfo().subscribe(
        (data:any)=>{
          this.machineId = data.mcid;
          this.area = data.area;
          this.city = data.city;
          this.state = data.state;
          this.country = data.country;
          this.phone = data.phone;
        }
      );
   }

  ngOnInit() { }

  updateMachineInfo(){
    let data = {
        "mcid": this.machineId,
        "area": this.area,
        "city": this.city,
        "state": this.state,
        "country": this.country,
        "phone": this.phone
    }

    this.machineDataService.updateMachineInfo(data).subscribe(
      (res)=>{
        this.toastr.success("Data Updated Successfully!","Success");
      },
      (error)=>{
        this.toastr.error("Error Updating Data","Error");
      }
    )
  }
  
}