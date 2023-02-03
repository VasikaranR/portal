import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  SignUp(val:any){
    return this.http.post(`http://localhost:3000/users`,val)
  }

  loginDetails(){
    return this.http.get(`http://localhost:3000/posts`)
  }
}
