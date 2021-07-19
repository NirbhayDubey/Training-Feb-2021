import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  movies: any;
  ngOnInit(): void {
    this.movieService.getAllMovie().subscribe(
      res => {
        console.log(res);
        this.movies = res;
      }
    )
  }
}
