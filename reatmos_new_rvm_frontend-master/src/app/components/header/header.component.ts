import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    logo1: string = 'assets/images/logo.png';
    logo2: string = 'assets/images/logo.png';


  constructor(
    private router: Router,
  ){

  }

  ngOnInit(){}

  openAdmin(){
    if(this.router.url === '/home' || this.router.url === '/filled-win'){
      this.router.navigate(['password']);
    }
  }

}
