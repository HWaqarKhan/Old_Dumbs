import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchItem: string = '';
  constructor(
    private router:ActivatedRoute,
    private route:Router,
    ) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params['searchItem']) {
        this.searchItem = params['searchItem'];
      }
    })
  }
  search(searchInput: string):void {
    if(searchInput){
      this.route.navigateByUrl('/search/'+searchInput)
    }else{
      this.route.navigateByUrl('/');
    }
  }

}
