import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder: FormBuilder ,private router:Router, private dataService:DataService) { }

  loginForm!:FormGroup;
  public username:string='vasikaran@gmail.com'
  public password:string='vasikaran123'
  userNameList:any=[]


  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^([A-Z]{1})[a-z0-9]{7,11}$')]),
    });
  }

  public login(){

    this.dataService.loginDetails().subscribe((data)=>{
        console.log("this data",data)
        this.userNameList=data;

         if(this.userNameList[0].userEmail==this.loginForm.value.email){
           if(this.userNameList[0].password==this.loginForm.value.password)
           {
            this.router.navigate(['/portal/overview'])
           }

         }
    })

  }
   
  
}
