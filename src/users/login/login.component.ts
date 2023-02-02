import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private loginService:LoginService ,private router:Router) { }
  loginForm!:FormGroup | any

  ngOnInit(): void {
    
    this.loginForm = this.formbuilder.group({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^([A-Z]{1})[a-z0-9]{7,11}$')]),
    });
  }

  public login(){
    let value=this.loginForm.value.password
    this.loginService.loginVerify().subscribe((data)=>{
      if(value)
      console.log(data)

    })
  }

}
