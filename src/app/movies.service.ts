import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private _HttpClient:HttpClient) {

   }

   getmovie(thetext:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${thetext}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  gettv(thetext:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${thetext}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }

  getperson(thetext:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${thetext}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
}
