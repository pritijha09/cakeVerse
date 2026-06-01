import { Component, Input } from '@angular/core';
import { QuantitySelectorComponent } from '../quantity-selector/quantity-selector.component';

@Component({
  selector: 'app-cart-item',
  standalone: true,
  imports: [QuantitySelectorComponent],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {
@Input({required:true})
  item!: any;
}
