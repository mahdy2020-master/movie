import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.scss']
})
export class NavparComponent implements OnInit {
  islogin=false;
  constructor(private _AuthService:AuthService) { 
  _AuthService.thetokenUser.subscribe(()=>{
    if(_AuthService.thetokenUser.getValue()!=null){
      this.islogin=true;
    }else{
      this.islogin=false;
    }
  })
}

logout(){
  this._AuthService.logout();
}
  ngOnInit(): void {
  }

}
