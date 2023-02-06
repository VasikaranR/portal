import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'portal';
  componentName:string=''
  

  currentUrl = true;

  constructor(public router: Router){
    console.log(window.location.pathname.includes('users'))

    if(window.location.pathname.includes('users')){
      this.currentUrl=false;
    }
  }
  ngOnInit(): void {
    console.log(window.location.pathname.split('/')[2])
     this.componentName=window.location.pathname.split('/')[2]
  }
  

  
  
  
 

    
      
}

