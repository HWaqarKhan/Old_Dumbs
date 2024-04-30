import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/serives/cart/cart.service';
import { FoodService } from 'src/app/serives/food/food.service';
import { Foods } from 'src/app/shared/models/food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent implements OnInit {
  food!:Foods;
  constructor(
    private foodService:FoodService,
    private cartService:CartService,
    private router:ActivatedRoute,
    private route:Router,) {
      router.params.subscribe((params)=>{
        if (params['id']) {
          this.food = foodService.getFoodById(params['id']);
        }
      })
     }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    console.log(this.cartService.addToCart(this.food))
    this.route.navigateByUrl('/cart-page');
  }

}
