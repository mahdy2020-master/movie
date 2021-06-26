import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error='';
  
   loginform=new FormGroup({
    password:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-z-0-9]{3,5}$")]),
    email:new FormControl(null,[Validators.email,Validators.required]),
   })
  constructor(private _AuthService:AuthService, private _Router:Router) { }
  submitloginForm(thedata:any){
   this._AuthService.login(thedata.value).subscribe((respons)=>{
     if(respons.message=="success"){
      localStorage.setItem("usertoken",respons.token);
      this._AuthService.thetoken();
       this._Router.navigate(['./home']);
     }else{
      this.error=respons.message
     }
   })
  }

  ngOnInit(): void {
  }

}
function thetoken() {
  throw new Error('Function not implemented.');
}

