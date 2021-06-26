import { MoviesService } from './../movies.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss']
})
export class HomeheaderComponent implements OnInit {
  tringmonies :any[]=[];
  thepassimg:string='https://image.tmdb.org/t/p/w500';
  customOptions: OwlOptions = {
    loop: true,
    margin:8,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }


  constructor(private _MoviesService:MoviesService) { 
    _MoviesService.getmovie(`movie`).subscribe((data)=>{
      this.tringmonies=data.results   ;
        })
   
  }


  ngOnInit(): void {
  }

}
