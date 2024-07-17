import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { ToastrService } from 'ngx-toastr';
import { PasswordService } from 'src/app/shared/services/password.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit{
  passwordData: any;
  oldPassword:string = '';
  newPassword:string = '';
  editField:string = '';

  faEdit = faEdit
  oldColor:string = 'black';
  newColor:string = 'black';

  constructor(
    private toastr: ToastrService,
    private passwordService: PasswordService
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

  ngOnInit() { }

  numPressed(num:string){
    if(this.editField === 'old'){
      this.oldPassword += num;
    }else if(this.editField === 'new'){
      this.newPassword += num;
    }

  }

  delete(){
    if(this.editField === 'old'){
      this.oldPassword = this.oldPassword.slice(0,-1);
    }else if(this.editField === 'new'){
      this.newPassword = this.newPassword.slice(0,-1);
    }
  }

  clear(){
    if(this.editField === 'old'){
      this.oldPassword = '';
    }else if(this.editField === 'new'){
      this.newPassword = '';
    }
  }

  editOld(){

    this.oldColor = 'green';
    this.editField = 'old';
    this.newColor = 'black';
  }

  editNew(){
    this.newColor = 'green';
    this.editField = 'new';
    this.oldColor = 'black';
  }

  changePassword(){
    if(this.oldPassword === this.passwordData.admin || this.passwordData.master === this.oldPassword){
      this.passwordService.updatePassword(this.newPassword).subscribe(
        (data) => {
          this.toastr.success('Password updated successfully');
          this.passwordData = data;
          this.oldPassword = '';
          this.newPassword = '';
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  

}
