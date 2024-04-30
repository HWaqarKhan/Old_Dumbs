import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItems';
import { Foods } from 'src/app/shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart :Cart = new Cart();
  // private cart!: Cart ;
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  addToCart(food:Foods):void{
    let cartItem = this.cart.items.find(item=> item.food.id === food.id)
    if(cartItem){
      // this.changeQuantity(food.id, cartItem.quantity+1)
      return;
    }
    this.cart.items.push(new CartItem(food));
  }


  getCart(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  removeFromCart(foodId:string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id !== foodId)
  }
  changeQuantity(foodId:string, quantity:number):void{
    let cartItem = this.cart.items.find(item => item.food.id===foodId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
  }

}
