import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit{

  phoneNumber: string = '';
  isPhoneNumberInvalid: boolean = false;

  constructor(
    private toastrService: ToastrService,
    private router: Router
  ){}

  ngOnInit(){}

  nextPressed(){
    if(this.phoneNumber.length == 10){
      this.router.navigateByUrl('/thank');
    }else{
      this.isPhoneNumberInvalid = true;
      setTimeout(() => {
        this.isPhoneNumberInvalid = false;
      }, 3000);

    }
  }

  cancelPressed(){
    this.router.navigate(['/home']);
  }

  numPressed(number:string){
    this.phoneNumber += number;
  }

  clear(){
    this.phoneNumber = '';
  }

  delete(){
    this.phoneNumber = this.phoneNumber.slice(0, -1);
  }

  ngOnDestroy(){
    
  }

}
