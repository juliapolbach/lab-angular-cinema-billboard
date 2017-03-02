import { Component, OnInit } from '@angular/core';
import { CinemaService} from '../cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css'],
  providers: [CinemaService]
})
export class MyHomeComponentComponent implements OnInit {
  movielist : Array<Object>
  constructor(public CinemaService : CinemaService) { }

  ngOnInit() {
      this.movielist = this.CinemaService.getMovies();
  }
}
