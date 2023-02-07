import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public Notification:string='Notification';
  public Settings:string='Settings';
  public Account:string='Account'
  public Login: string = 'Login';
  public SignUp: string = 'Sign Up';
  public ResetPassword: string = 'Reset Password';
  public Error:string = '404 Error';

  public dataInternal = [
   
    
    {
      data:[

      ]
    }
 ]

 public dataExternal = [
  {
     item: "login"
  },
  {
     item: "sign-up"
  },
  {
     item: "reset-password"
  },
  {
    item:"404-error"
  },
  {
   item: "notification"
  },
  {
   item: "accounts"
  },
  { 
   item: "settings"
   },
]

  constructor(private router:Router) { 

  }

  ngOnInit(): void {
  }

  callUrl(data:any){
    this.router.navigate(['users/',data])
  }

}
