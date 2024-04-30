import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from 'src/app/serives/food/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() foodPageTag?:string[];
  public tags?:Tag[];
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    if (!this.foodPageTag) {
      this.tags = this.foodService.getTags();
    }
  }

}
