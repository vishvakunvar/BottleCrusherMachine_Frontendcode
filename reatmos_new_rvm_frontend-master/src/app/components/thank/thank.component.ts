import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thank',
  templateUrl: './thank.component.html',
  styleUrls: ['./thank.component.scss']
})
export class ThankComponent implements OnInit{

  constructor(
    private router: Router,
  ){
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }

  ngOnInit() { }

  ngOnDestroy() { }

}
