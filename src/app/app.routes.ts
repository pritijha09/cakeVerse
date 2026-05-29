import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./layouts/customer-layout/customer-layout.component').then(m => m.CustomerLayoutComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./features/home/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: 'products',
                loadComponent: () => import('./features/products/product-list/product-list.component').then(m => m.ProductListComponent)
            },
            {
                path: 'cart',
                loadComponent: () => import('./features/cart/cart-page/cart-page.component').then(m => m.CartPageComponent)
            }
        ]
    },
    {
        path: 'admin',
        loadComponent: () => import('./layouts/admin-layout/admin-layout.component').then(m => m.AdminLayoutComponent)
    },
    {
        path: '**',
        redirectTo: ''
    }
];
