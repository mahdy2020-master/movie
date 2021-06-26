import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(private _AuthService:AuthService,private _Router:Router) { }
  error='';
   registerForm =new FormGroup({
     first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
     last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
     age:new FormControl(null,[Validators.required, Validators.min(16) , Validators.max(30)]),
     password:new FormControl(null,[Validators.required,Validators.pattern("^[A-Z][a-z-0-9]{3,5}$")]),
     email:new FormControl(null,[Validators.email,Validators.required]),

   })

submitRegisterForm(register:any){
  this._AuthService.register(register.value).subscribe((respons)=>{
    if(respons.message=="success"){
       this._Router.navigate(['./login']);
    }else{
      this.error=respons.errors.email.message;
      
    }
  })
}
  
  

  ngOnInit(): void {

  }

}
