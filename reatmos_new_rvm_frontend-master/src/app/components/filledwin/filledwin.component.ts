import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription, switchMap, timer } from 'rxjs';
import { BinServiceService } from 'src/app/shared/services/bin-service.service';

@Component({
  selector: 'app-filledwin',
  templateUrl: './filledwin.component.html',   
  styleUrls: ['./filledwin.component.scss']
})
export class FilledwinComponent implements OnInit{

  binDataSubscription: Subscription;

  constructor(
    private router: Router,
    private binService: BinServiceService,
    private toastr: ToastrService
  ) { 

      this.binDataSubscription = timer(0,1000)
      .pipe(
        switchMap(()=>this.binService.getBinData())
      ).subscribe(
        (data:any)=>{
          console.log(data);
          if(data.binful === false){
            
            this.router.navigate(['/home']);
          }
        },(error)=>{
          this.toastr.error(error.message,'Error');

        }
      );

  }

  ngOnInit(){}

  ngOnDestroy(){
    this.binDataSubscription.unsubscribe();
  }

}
