import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  tringmonies :any[]=[];
  thepassimg:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.getmovie(`movie`).subscribe((data)=>{
      this.tringmonies=data.results.slice(0,10);
        })
   }

  ngOnInit(): void {
  }

}
