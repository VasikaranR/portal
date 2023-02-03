import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,private dataService:DataService) { }
  signUpForm!:FormGroup | any

  ngOnInit(): void {
    
    this.signUpForm = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9\.]{4,18}@[a-z]+\.[a-z\.]{2,6}$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^([A-Z]{1})[a-z0-9]{7,11}$')]),
    });
  }

  public signUp(){

    this.dataService.SignUp(this.signUpForm.value)
  }


}
