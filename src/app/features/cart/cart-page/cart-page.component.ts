import { Component } from '@angular/core';
import { CartHeaderComponent } from "../components/cart-header/cart-header.component";
import { CartListComponent } from "../components/cart-list/cart-list.component";
import { CartSummaryComponent } from "../components/cart-summary/cart-summary.component";
import { CouponSectionComponent } from "../components/coupon-section/coupon-section.component";
import { RecommendedProductsComponent } from "../components/recommended-products/recommended-products.component";

@Component({
  selector: 'app-cart-page',
  imports: [CartHeaderComponent, CartListComponent, CartSummaryComponent, CouponSectionComponent, RecommendedProductsComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent {

}
