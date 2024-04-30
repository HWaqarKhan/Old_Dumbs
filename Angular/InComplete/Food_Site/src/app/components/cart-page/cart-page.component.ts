import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/serives/cart/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  constructor(private cartService:CartService,) { 
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
  }
  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem:CartItem, quantity:string){
    const qty = parseInt(quantity);
    this.cartService.changeQuantity(cartItem.food.id, qty);
  }




  // removeFromCart(cartItem:CartItem){
  //   this.cartService.removeFromCart(cartItem.food.id);
  // }

  // changeQuantity(cartItem:CartItem,quantityInString:string){
  //   const quantity = parseInt(quantityInString);
  //   this.cartService.changeQuantity(cartItem.food.id, quantity);
  // }
}
