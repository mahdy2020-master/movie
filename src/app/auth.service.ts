import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode  from'jwt-decode';
Router
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient,private _Router:Router) { 
    if(localStorage.getItem("usertoken")!=null){
      this.thetoken();
    }
  }
thetokenUser=new BehaviorSubject(null);
 thetoken(){
  const token:any = localStorage.getItem("usertoken");
  jwtDecode(token);
  this.thetokenUser.next(jwtDecode(token));
  
 }

 logout(){
   this.thetokenUser.next(null);
   localStorage.removeItem("usertoken");
   this._Router.navigate(['./login']);
 }



  register(thedata:any):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup',thedata);
  } 

  login(thedata:any):Observable<any>
  {
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin ',thedata);
  }
  
  getid(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-Us`)
  }
  getidtv(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50&language=en-Us`)
  }
}
