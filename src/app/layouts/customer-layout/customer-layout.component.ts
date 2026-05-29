import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/component/header/header.component';
import { FooterComponent } from '../../shared/component/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './customer-layout.component.html',
  styleUrl: './customer-layout.component.scss'
})
export class CustomerLayoutComponent {

}

