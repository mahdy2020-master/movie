import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../movies.service';
@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss']
})
export class TvshowComponent implements OnInit {
  tringtv :any []=[];
  thepassimg:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.gettv(`tv`).subscribe((data)=>{
      this.tringtv=data.results.slice(0,10);
        })
  }

  ngOnInit(): void {
  }

}
