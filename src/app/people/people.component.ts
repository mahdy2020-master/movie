import { MoviesService } from './../movies.service';

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  tringpersone:any[]=[];
  thepassimg:string='https://image.tmdb.org/t/p/w500';
  constructor(private _MoviesService:MoviesService) { 


    _MoviesService.getperson(`person`).subscribe((data)=>{
      this.tringpersone=data.results.slice(0,10);
        })
  }

  ngOnInit(): void {
  }

}
