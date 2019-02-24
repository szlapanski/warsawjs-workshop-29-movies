import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from 'src/app/search-service.service';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {

  public movieList:Array<any>;

  constructor(public MoviesService:SearchServiceService) { }

  ngOnInit() {
    // console.log(this.MoviesService.fetchList().toPromise());
    const listObject = this.MoviesService.fetchList().toPromise();
    listObject.then((value) => {
      this.movieList = value;
    })
  }

}
