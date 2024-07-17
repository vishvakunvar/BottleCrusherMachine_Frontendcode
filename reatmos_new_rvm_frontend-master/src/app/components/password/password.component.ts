import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PasswordService } from 'src/app/shared/services/password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit{
  isPasswordInvalid: boolean = false;
  password: string = '';
  passwordData: any;


  constructor(
    private router: Router,
    private toastr: ToastrService,
    private passwordService: PasswordService,
  ) {
    this.passwordService.getPassword().subscribe(
      (data) => {
        this.passwordData = data;
      },
      (error) => {
        console.log(error);
      }
    );
   }

  ngOnInit() {

  }

  nextPressed(){
    if(this.password === this.passwordData.admin || this.password === this.passwordData.master){
      this.router.navigate(['admin']);
    }else{
      this.toastr.error('Wrong password!', 'Error');
    }
  }

  numPressed(number:string){
    this.password += number;
  }

  clear(){  
    this.password = '';
  }

  delete(){
    this.password = this.password.slice(0, -1);
  }

  cancelPressed(){
    this.router.navigate(['/home']);
  }

  ngOnDestroy(){
  }

}
