import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FetchListResponseBody, SearchServiceService } from 'src/app/search-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public filteredList;

  constructor(public MoviesService:SearchServiceService, private route:ActivatedRoute, private router:Router) { }

  @ViewChild('value') public inputRef:ElementRef;

  private qparam : string = this.route.snapshot.queryParamMap.get('title');

  public redirect(event) {
    const phrase = this.inputRef.nativeElement.value;
    this.router.navigate(['/search/', phrase]);
  }

  ngOnInit() {
    if (this.qparam !== ''){
      const listObject = this.MoviesService.fetchSearch(this.qparam).toPromise();
      listObject.then((value) => {
        this.filteredList = value;
        console.log(value)
      });
    }  
  }
}