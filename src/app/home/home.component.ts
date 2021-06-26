import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tringmonies :any[]=[];
tringtv :any []=[];

thepassimg:string='https://image.tmdb.org/t/p/w500';
  constructor( private _MoviesService:MoviesService) {

    _MoviesService.getmovie(`movie`).subscribe((data)=>{
  this.tringmonies=data.results.slice(0,10);
    })
    

    _MoviesService.gettv(`tv`).subscribe((data)=>{
      this.tringtv=data.results.slice(0,10);
        })


   
    

   }
  ngOnInit(): void {
  }
}




