import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
import { Menu, sample_tags } from 'src/json';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

 
  getAll(): Foods[] {
    // const foodMenu = of(Menu)
    return Menu;
  }
  getMenuByTag(tag: string):Foods[]{
    return tag=='All'?this.getAll() : this.getAll().filter(food =>food.tags?.includes(tag));
  }
  getTags():Tag[]{
    return sample_tags
  }
  getFoodById(id:string):Foods{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }
}
