import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/serives/food/food.service';
import { Foods } from 'src/app/shared/models/food';
import { StarRatingComponent } from 'ng-starrating';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods:Foods[]=[];
  constructor(private foodService:FoodService,private router:ActivatedRoute) { 
    router.params.subscribe((params) => {
      if (params['searchTerm'])
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      else if (params['tag'])
        this.foods = this.foodService.getMenuByTag(params['tag']);
      else
        this.foods = foodService.getAll();
    })
  }

  ngOnInit(): void {
    // this.getFoodMenu();
  }
  
  getFoodMenu(){
    this.router.params.subscribe(params => {
      if(params['searchItem']){
        this.foods = this.foodService.getAll().filter(food => food.name?.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }else if(params['tag']){
        this.foods = this.foodService.getMenuByTag(params['tag']);
      }
      else{
        // this.foodService.getAll().subscribe(res=>this.foods = res)
        this.foods =  this.foodService.getAll();
      }
    })
  }

}
