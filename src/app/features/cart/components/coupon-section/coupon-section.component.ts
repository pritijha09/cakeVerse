import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coupon-section',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './coupon-section.component.html',
  styleUrl: './coupon-section.component.scss'
})
export class CouponSectionComponent {
coupon: string = '';

applyCoupon() {
  // Implement coupon application logic here
  console.log('Applying coupon:', this.coupon);
}
} 
