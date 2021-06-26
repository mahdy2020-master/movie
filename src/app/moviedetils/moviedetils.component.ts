import { AuthService } from './../auth.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moviedetils',
  templateUrl: './moviedetils.component.html',
  styleUrls: ['./moviedetils.component.scss']
})
export class MoviedetilsComponent implements OnInit {
id:string ='';
thedatafalim :any={};
thesrcimg='https://image.tmdb.org/t/p/w500/';
  constructor(private _ActivatedRoute:ActivatedRoute,private _AuthService:AuthService) { 
    this.id=_ActivatedRoute.snapshot.params.id;
    _AuthService.getid(this.id).subscribe((respons)=>{
      this.thedatafalim=respons;
       
    })

  

  }
  
  ngOnInit(): void {
  }

}
