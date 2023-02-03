import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
