import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../../shared/component/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from '../../shared/component/admin-header/admin-header.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    AdminHeaderComponent,
    AdminSidebarComponent,
    RouterOutlet
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss'
})
export class AdminLayoutComponent {

}
