import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchServiceService, FetchMovieResponseBody } from 'src/app/search-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public movie : FetchMovieResponseBody;

  constructor(public MoviesService:SearchServiceService, private route:ActivatedRoute) { }

  ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id');
    const listObject = this.MoviesService.fetchMovie(movieId).toPromise();
    listObject.then((value) => {
      this.movie = value;
      console.log(this.movie)
    })
  }

}
