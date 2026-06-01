import { Component, signal } from '@angular/core';
import { CartItemComponent } from '../cart-item/cart-item.component';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CartItemComponent],
  templateUrl: './cart-list.component.html',
  styleUrl: './cart-list.component.scss'
})
export class CartListComponent {
 cartItems = signal([
    {
      id:'1',
      name:'Chocolate Cake',
      price:599,
      quantity:1
    }
  ]);
}
