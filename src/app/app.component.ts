import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portal';

  currentUrl = true;

  constructor(public router: Router){
    console.log(window.location.pathname.includes('users'))

    if(window.location.pathname.includes('users')){
      this.currentUrl=false;
    }
  }
  ngOnInit(): void {
  }
  
 

    
      
}

